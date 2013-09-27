class RepresentativesController < ApplicationController

  def index
    @response = Sunlight_Foundation.response
  end

end