class Dish

    attr_accessor :name, :location
    @@all = []
    #  name, franchise
    def initialize(name, location)
      @name = name
      @location = location

      @@all << self
    end

    def self.all
        @@all
    end


end

# 