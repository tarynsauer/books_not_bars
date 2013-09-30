class MapController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  layout "map_layout"

  def index
  end

  def update
    state_obj = State.where(name: params[:state])

    # if state_obj.first.edu_per_capita
    #   pupil_cost = state_obj.first.edu_per_capita
    # end

    # if state_obj.first.inc_per_capita
    #   inmate_cost = state_obj.first.inc_per_capita
    # end

    my_obj = state_obj[0]
    if request.xhr?
     render json: { stats: my_obj }
    end
  end
end
