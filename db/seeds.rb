# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

File.open('db/source1.csv').each do |row|
  arr = row.split(",")
  DataUnit.create(
    state: arr[0],
    category: arr[1],
    data_num: arr[2],
    scope: arr[5] )
end
