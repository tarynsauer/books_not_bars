# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# source1array = []
require 'csv'  

csv_text = File.read('db/source1.csv')
csv = CSV.parse(csv_text, :headers => true)

csv.each do |row|
  p row.to_hash
  State.create!(row.to_hash)
end
