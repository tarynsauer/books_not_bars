# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
source1array = []

File.open('db/source1.csv').each do |row|
  source1array << row.chomp.split(",")
end

source1array[1..-1].each do |state|
  State.create(
    name: state[0],
    education_per_capita: state[1].to_i,
    incarceration_per_capita: state[2].to_i )
end
