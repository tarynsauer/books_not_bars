class MapController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  layout "map_layout"

  def index
  end

  def update
    # REVIEW(RCB): Why are you calling this twice? This should probably just use State.first instead
    #   Also, there doesn't appear to be any error handling.
    p state_obj = State.where(name: params[:state])

    state_obj = State.where(name: params[:state])

    my_obj = state_obj[0]
    
    if request.xhr?
     render json: { stats: my_obj }
    end
  end
end
