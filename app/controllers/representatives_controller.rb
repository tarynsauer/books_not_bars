class RepresentativesController < ApplicationController
  layout 'action_toolkit'

  def index
    if params[:latitude]
      @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
    else
      @response = Sunlight_Foundation.response(params[:latitude2], params[:longitude2])
    end
    display_legislators_info(@response)
  end

  def zipcode
    @response = Sunlight_Foundation.response_by_zipcode(params[:zipcode])
    display_legislators_info(@response)
  end

end