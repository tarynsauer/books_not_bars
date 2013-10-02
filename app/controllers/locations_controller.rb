class LocationsController < ApplicationController
  layout 'location'

  def index
  end

  def new
    @location = Location.new
  end

  def create
    params.permit!
    @location = Location.new(params[:location])

    # Formats location for Google maps info window
    if @location.zipcode || (@location.address_street && @location.city && @location.state)
      format_address_for_map(@location)
      format_info_window_text(@location)
    end
    @location.save

    redirect_to @location
  end

  def show
    @location = Location.find(params[:id])
  end

  private

  def location_params
    params.require(:location).permit(:title, :organization_name, :address_street, :city, :state, :zipcode, :description, :website, :twitter_handle)
  end

end