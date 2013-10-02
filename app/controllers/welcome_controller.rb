class WelcomeController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  end

  # REVIEW (RCB): Is this action used? I don't see a reference to it
  #   If not, I recommend removing the code and routes
  def update
        
    p state_obj = State.where(name: params[:state])


    my_obj = state_obj[0]
    if request.xhr?
     render json: { stats: my_obj }
    end
  end
end
