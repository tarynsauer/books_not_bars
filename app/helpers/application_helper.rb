module ApplicationHelper

  def format_for_google(location)
    location.full_address     = "#{location.address_street}, #{location.city}, #{location.state} #{location.zipcode}"
    location.full_description = "<h1 id='firstHeading' class='firstHeading'>#{location.title}</h1><div id='infoWindow'><p><b>#{location.address_street}</b><p>#{location.description}</p><p>For more information, visit <a href='#{location.website}' target='_blank'>#{location.website}</a>.</p><p><a href='https://twitter.com/intent/tweet?screen_name=#{location.twitter_handle}&text=Much%20love%20for%20&hashtags=#{location.twitter_handle},booksnotbars' class='twitter-mention-button' data-lang='en'>Tweet to @#{location.twitter_handle}</p>"
  end

end
