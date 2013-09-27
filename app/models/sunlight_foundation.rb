class Sunlight_Foundation
  include HTTParty

  def self.response
    api_key = ENV["SUNLIGHT_API_KEY"]
    latitude = "41.8895226"
    longitude = "-87.637171"
    zipcode = "60602"
    # api_url = "http://congress.api.sunlightfoundation.com/legislators/locate?zip=#{zipcode}&apikey=#{api_key}"
    api_url = "http://congress.api.sunlightfoundation.com/legislators/locate?latitude=#{latitude}&longitude=#{longitude}&apikey=#{api_key}"
    puts api_url
    HTTParty.get(api_url)
  end

end#