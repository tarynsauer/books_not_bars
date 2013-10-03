# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# source1array = []
require 'csv'
State.delete_all

csv_text = File.read('db/source1.csv')
csv = CSV.parse(csv_text, :headers => true)

csv.each do |row|
  state = State.create!(row.to_hash)

  if state.edu_per_capita && state.inc_per_capita
    ratio = state.inc_per_capita.to_f/state.edu_per_capita
    total = state.inc_per_capita.to_f + state.edu_per_capita
    ratio2 = ratio.round(2)
    state.update_attributes(:spending_ratio => ratio2, :total_spending => total)
  elsif state.edu_per_capita
    total = state.edu_per_capita
    state.update_attributes(:total_spending => total)
  elsif state.inc_per_capita
    total = state.inc_per_capita
    state.update_attributes(:total_spending => total)
  end
end

representatives_text = File.read('db/representatives_data.csv')
representatives_csv = CSV.parse(representatives_text, :headers => true)
representatives_csv.each do |row|
  Representative.create!(row.to_hash)
end

def format_info_window_text(location)
  location.full_description = "<h1 id='firstHeading' class='firstHeading'>#{location.title}</h1><div id='infoWindow'><p><b>#{location.address_street}</b><p>#{location.description}</p><p>For more information, visit <a href='#{location.website}' target='_blank'>#{location.website}</a>.</p><p><a href='https://twitter.com/intent/tweet?screen_name=#{location.twitter_handle}&text=Much%20love%20for%20&hashtags=#{location.twitter_handle},booksnotbars' class='twitter-mention-button' data-lang='en'>Tweet to @#{location.twitter_handle}</p>"
end

locations_text = File.read('db/locations_data.csv')
locations_csv = CSV.parse(locations_text, :headers => true)
locations_csv.each do |row|
  location = Location.create!(row.to_hash)
  format_info_window_text(location)
  location.save
end

# states = State.all
# states.each do |state|

#   state.update
# end

# csv2_text = File.read('db/CrimeTrendsInOneVar.csv')

# csv2 = CSV.parse(csv2_text, :headers => true)

# csv2.each do |row|
#   State.create!(row.to_hash)
# end
