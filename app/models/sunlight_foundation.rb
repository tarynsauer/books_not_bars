class Sunlight_Foundation
  include HTTParty

  def self.response(latitude, longitude)
    api_key = ENV["SUNLIGHT_API_KEY"]
    api_url = "http://congress.api.sunlightfoundation.com/legislators/locate?latitude=#{latitude}&longitude=#{longitude}&apikey=#{api_key}"
    HTTParty.get(api_url)
  end

  def self.response_by_zipcode(zipcode)
    api_key = ENV["SUNLIGHT_API_KEY"]
    api_url = "http://congress.api.sunlightfoundation.com/legislators/locate?zip=#{zipcode}&apikey=#{api_key}"
    HTTParty.get(api_url)
  end

end