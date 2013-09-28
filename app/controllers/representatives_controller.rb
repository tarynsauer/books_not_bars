class RepresentativesController < ApplicationController
  layout false

  def index
    @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
    # @response = nil
  end

  def zipcode
    @response = Sunlight_Foundation.response_by_zipcode(params[:zipcode])
  end

end