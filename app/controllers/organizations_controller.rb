class OrganizationsController < ApplicationController
  layout 'action_toolkit'

  def index
    render :index
  end

  def create
  end

  def show_for_map
    markers = Location.all.to_a

    if request.xhr?
      render json: { markers: markers }
    end
  end

  def rerender
  	render :index
  end

end
