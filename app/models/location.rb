class Location < ActiveRecord::Base
  validates_format_of :website, :with => URI::regexp(%w(http https))
  validates_presence_of :title
end
