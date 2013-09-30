class RepresentativesController < ApplicationController

  def index
    p params
    @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
    display_legislators_info(@response)
  end

  def zipcode
    @response = Sunlight_Foundation.response_by_zipcode(params[:zipcode])
    display_legislators_info(@response)
  end

end