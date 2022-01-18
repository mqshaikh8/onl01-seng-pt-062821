class Fish < Animal

    attr_accessor :swim

    def initialize(name, color, mood, age, swim)
        super(name, color, mood, age)
        @swim = swim
    end
    
end