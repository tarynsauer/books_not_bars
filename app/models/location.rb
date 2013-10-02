class Location < ActiveRecord::Base
  validates_format_of :website, :with => URI::regexp(%w(http https))
  validates_presence_of :title

  geocoded_by :full_address  # can also be an IP address
  after_validation :geocode  # auto-fetch coordinates

end
