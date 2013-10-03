class WelcomeController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    state_bar = State.all
    if request.xhr?
     render json: { bar_stats: state_bar }
    end
    # render :index
  end

  def update
        
    p state_obj = State.where(name: params[:state])


    p my_obj = state_obj[0]
    if request.xhr?
     render json: { stats: my_obj }
    end
  end
end
