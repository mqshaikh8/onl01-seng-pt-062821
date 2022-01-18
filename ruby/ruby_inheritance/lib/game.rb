class Game
    def start
        puts 'Welcome to our pet shop'
        owner = Owner.all[0]
        [owner.pets[:fish] + owner.pets[:bird] + owner.pets[:cat]].each do |pet|
            puts pet
        end

    end


end
