class RepresentativesController < ApplicationController
  layout 'action_toolkit'

  # REVIEW(RCB): No error handling. What if the Sunlight API is down? I found the issue
  #   by not having specified a Sunlight API key
  def index
    @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
    display_legislators_info(@response)
  end

  # REVIEW(RCB): Same error handling issue as above
  def zipcode
    @response = Sunlight_Foundation.response_by_zipcode(params[:zipcode])
    display_legislators_info(@response)
  end

end
