# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'
arr =  [23, 43, 45, 23, 23434, 45,23, 22, 767, 8]
25.times do
    name = Faker::Name.name
    puts "Seeding " + name
    User.create(username:name, password: Faker::Quotes::Shakespeare.hamlet_quote, age: arr.sample)
end

User.create(username:"Mohammed", password: "12345", age: 2)
puts "Seeding " + "Last user"
puts "seeding ended"
