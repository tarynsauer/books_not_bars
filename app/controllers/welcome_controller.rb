class WelcomeController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    
  end

  def update
    p params
    p params[:state]
    p "X"*100
    state_obj = State.where(name: params[:state])
    p state_obj
    pupil_cost = state_obj.edu_per_capita
    inmate_cost = state_obj.inc_per_capita
    p "X"*100
    if request.xhr?
     render json: { pupil_cost: pupil_cost, inmate_cost: inmate_cost }
    end
  end
end
