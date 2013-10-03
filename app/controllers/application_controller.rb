class ApplicationController < ActionController::Base
  helper_method :format_address_for_map
  helper_method :format_info_window_text
  helper_method :format_for_google
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

  # REVIEW(RCB): based on the usage of these two methods, they should probably be model methods on
  #   Location and then called via callbacks before save
  def format_address_for_map(location)
    location.full_address = "#{location.address_street}, #{location.city}, #{location.state} #{location.zipcode}"
  end

  def format_info_window_text(location)
    location.full_description = "<h1 id='firstHeading' class='firstHeading'>#{location.title}</h1><div id='infoWindow'><p><b>#{location.address_street}</b><p>#{location.description}</p><p>For more information, visit <a href='#{location.website}' target='_blank'>#{location.website}</a>.</p><p><a href='https://twitter.com/intent/tweet?screen_name=#{location.twitter_handle}&text=Much%20love%20for%20&hashtags=#{location.twitter_handle},booksnotbars' class='twitter-mention-button' data-lang='en'>Tweet to @#{location.twitter_handle}</p>"
  end
end
