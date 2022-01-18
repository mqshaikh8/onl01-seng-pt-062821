# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

arr = [23, 54, 23, 12, 43, 45, 65, 23,43,5, 43]

25.times do |user|
    name = Faker::Name.name
    puts("😁 Seeding" + name)
    User.create(username: name, password: Faker::Quotes::Shakespeare.hamlet_quote, age: Faker::Number.number(digits: 2) )
end
print("Seeding test user")
User.create(username: "Joe", password: "12345", age: arr.sample)

User.create(username: "Daniel", password: "12345", age: arr.sample)



50.times do |task|
    name = Faker::Job.title
    puts("😁 Seeding task " + name)
    x = Bug.create({
        title: Faker::Job.title, 
        desc: Faker::Lorem.characters,
        priority: Random.rand(10),
        status: 'Incomplete',
        created_by: User.all.sample.id,
        solved_by:  User.all.sample.id 
    })

end
puts(" 😁 Seeding Done  ")

byebug
