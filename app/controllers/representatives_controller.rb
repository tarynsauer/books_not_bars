class RepresentativesController < ApplicationController
  layout 'representatives'

  def index

    if params[:latitude]
      @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
    else
      @response = Sunlight_Foundation.response(params[:latitude2], params[:longitude2])
    end
    # Error handling if the Sunlight API is down
    if @response["error"]
      redirect_to legislators_find_by_state_path
    else
      display_legislators_info(@response)
    end
  end

  def zipcode
    @response = Sunlight_Foundation.response_by_zipcode(params[:zipcode])

  # Error handling if the Sunlight API is down
    if @response["error"]
      redirect_to legislators_find_by_state_path
    else
      display_legislators_info(@response)
    end
  end

  def find_by_state
    @us_states = us_states
  end

  def show_by_state
    @representatives = Representative.where(state: params[:state])
    @representatives
    @state = State.where(postal_abbrev: params[:state]).first
    state_messages(@state.name)
  end

end