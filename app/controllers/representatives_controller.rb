class RepresentativesController < ApplicationController
  layout false

  def index
    @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
  end

end