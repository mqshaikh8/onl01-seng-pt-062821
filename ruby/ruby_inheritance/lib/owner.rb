class Owner
    @@all = []
    def initialize(name)
      @name = name,
      @pets = {:fish => [], :cat => [], :bird => []}
      @@all << self
    end

    def adopt( type, name, color, mood, age, lives = nil, swim = nil, fly = nil )
        case type
        when 'cat'
            cat = Cat.new(name, color, mood, age, lives )
            @pets[:cat] << cat
        when 'bird'
            bird = Bird.new(name, color, mood, age, fly )
            @pets[:bird] << bird

        when 'fish'
            fish = Fish.new(name, color, mood, age, swim )
            @pets[:fish] << fish
        else
            puts 'ERROR: please check your spelling'
        end
    end

    def self.all
        @@all
    end

    def pets
        @pets
    end
end