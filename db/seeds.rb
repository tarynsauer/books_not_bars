# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

File.open('db/source1.csv').each do |row|
  Data_unit.create(
    state: row[0],
    category: row[1],
    data_num: row[2],
    age: row[3],
    race: row[4],
    scope: row[5] )
end
