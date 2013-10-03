class LocationsController < ApplicationController
  layout 'location'

  def index
    @locations = Location.all.to_a
  end

  def create
    params.permit!
    @location = Location.new(params[:location])

    format_info_window_text(@location)

    @location.save

    redirect_to @location
  end

  def new
    @location = Location.new
  end

  # REVIEW(RCB): Error handling for locations that don't exist?
  def edit
    @location = Location.where(id: params[:id]).first
    if @location
      @location
    else
      redirect_to locations_path
    end
  end

  def show
    @location = Location.find(params[:id])
  end

  def update
    params.permit!
    @location = Location.find(params[:id])
    redirect_to @location
    @location = Location.where(id: params[:id]).first
    if @location
      @location.update(params[:location])
    else
      redirect_to locations_path
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    redirect_to @location
  end

end
