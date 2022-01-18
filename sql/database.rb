require 'sqlite3'
require 'pry'
require 'faker'

db = SQLite3::Database.new('artists.db')

25.times do 
    name = Faker::Name.name
    num = Random.rand(275)
    db.execute("INSERT INTO fans (name, artist_id) VALUES (?, ?) ", name, num)
end

binding.pry