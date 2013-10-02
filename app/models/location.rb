class Location < ActiveRecord::Base
  validates_format_of :website, :with => URI::regexp(%w(http https))
  validates_presence_of :title

  geocoded_by :address  # can also be an IP address
  after_validation :geocode  # auto-fetch coordinates

  def address
    [address_street, city, state, zipcode].compact.join(', ')
  end

end
