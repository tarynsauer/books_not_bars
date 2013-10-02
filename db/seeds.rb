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
    ratio = state.edu_per_capita.to_f/state.inc_per_capita
    ratio2 = ratio.round(2)
    state.update_attributes(:spending_ratio => ratio2)
  end
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
