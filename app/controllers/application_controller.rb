class ApplicationController < ActionController::Base
  helper_method :display_legislators_info
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def display_legislators_info(response_data)
    if response_data["results"].empty?
      nil
    else
      state = State.where(name: response_data["results"].first["state_name"]).first
      @message = "It's not OK that " + state.name + " spends $" + state.inc_per_capita.to_s + " to incarcerate an inmate per year and only $" + state.edu_per_capita.to_s + " to educate each pupil."
      @form_message = @message + " Please work for prison and education spending reform. I support BooksNotBars."
    end
  end
end
