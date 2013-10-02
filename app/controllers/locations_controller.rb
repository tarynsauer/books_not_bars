class LocationsController < ApplicationController
  layout 'location'

  def index
    @locations = Location.all.to_a
  end

  def create
    params.permit!
    @location = Location.new(params[:location])

    # Use Google javascript method to get lat/long coordinates based on the address provided
    # Save the lat/longitude to the database

    # Formats location for Google maps info window
    if @location.zipcode || (@location.address_street && @location.city && @location.state)
      format_address_for_map(@location)
      format_info_window_text(@location)
    end
    @location.save

    redirect_to @location
  end

  def new
    @location = Location.new
  end

  def edit
    @location = Location.find(params[:id])
  end

  def show
    @location = Location.find(params[:id])
  end

  def update
    params.permit!
    @location = Location.find(params[:id])
    @location.update(params[:location])
    redirect_to @location
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    redirect_to @location
  end

end