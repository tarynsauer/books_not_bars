class RepresentativesController < ApplicationController
  layout false

  def index
    @response = Sunlight_Foundation.response(params[:latitude], params[:longitude])
    @response = nil
    if @response
      state = State.where(name: @response["results"].first["state_name"]).first
      @message = "It's not OK that " + state.name + " spends $" + state.inc_per_capita.to_s + " to incarcerate an inmate per year and only $" + state.edu_per_capita.to_s + " to educate each pupil."
      @form_message = @message + " Please work for prison and education spending reform. I support BooksNotBars."
    end
  end

  def zipcode
    @response = Sunlight_Foundation.response_by_zipcode(params[:zipcode])
    if @response
      state = State.where(name: @response["results"].first["state_name"]).first
      @message = "It's not OK that " + state.name + " spends $" + state.inc_per_capita.to_s + " to incarcerate an inmate per year and only $" + state.edu_per_capita.to_s + " to educate each pupil."
      @form_message = @message + " Please work for prison and education spending reform. I support BooksNotBars."
    end
  end

end