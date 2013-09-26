class WelcomeController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    render action: :index, :layout => "application"
  end

  def update
    p params
    edu_data_unit = DataUnit.where(state: params[:state], category: "education")
    prison_data_unit = DataUnit.where(state: params[:state], category: "prison")
    
    p "X"*100
    if request.xhr?
     render json: { inmate_cost: prison_data_unit.first.data_num, pupil_cost: edu_data_unit.first.data_num}
    end
  end
end
