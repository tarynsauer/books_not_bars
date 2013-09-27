class Sunlight_Foundation
  include HTTParty

  def self.response(latitude, longitude)
    api_key = ENV["SUNLIGHT_API_KEY"]
    zipcode = "60602"
    api_url = "http://congress.api.sunlightfoundation.com/legislators/locate?latitude=#{latitude}&longitude=#{longitude}&apikey=#{api_key}"
    puts api_url
    HTTParty.get(api_url)
  end

end