CurrentBooksBar::Application.routes.draw do

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  post '/update' => 'welcome#update'

  post '/map/update' => 'map#update'

  get '/legislators' => "representatives#index"

  get '/legislators/find_by_state' => "representatives#find_by_state"

  get '/legislators/show_by_state' => "representatives#show_by_state"

  get '/organizations/show_for_map' => "organizations#show_for_map"

  resources :organizations

  resources :locations

  get '/map' => "map#index"

  get '/zipcode' => "representatives#zipcode"

  get '/rerender' => "organizations#rerender"

  get '/mobile' => "mobile#index"


  mount JasmineRails::Engine => "/specs" if defined?(JasmineRails)

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
