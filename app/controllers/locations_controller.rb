class LocationsController < ApplicationController
  layout 'action_toolkit'

  def index
  end

  def new
    @location = Location.new
  end

  def create
    @location = Location.new(params[:location])

    # Formats location for Google maps info window
    format_for_google(@location)
    @location.save
  end

  def show
  end

  private

  def location_params
    params.require(:location).permit(:title, :organization_name, :address_street, :city, :state, :zipcode, :description, :website, :twitter_handle)
  end

end