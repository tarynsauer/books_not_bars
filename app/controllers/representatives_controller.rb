class RepresentativesController < ApplicationController
  layout 'action_toolkit'

  def index

    if params[:latitude]
      @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
    else
      @response = Sunlight_Foundation.response(params[:latitude2], params[:longitude2])
    end

    if @response["error"]
      redirect_to legislators_find_by_state_path
    else
      display_legislators_info(@response)
    end
  end

  def zipcode
    @response = Sunlight_Foundation.response_by_zipcode(params[:zipcode])
    display_legislators_info(@response)
  end

  def find_by_state
    @us_states = us_states
  end

  def show_by_state
    @representatives = Representative.where(state: params[:state])
    p @representatives
    p "x" * 100
    @state = State.where(postal_abbrev: params[:state]).first
    state_messages(@state.name)
  end

end