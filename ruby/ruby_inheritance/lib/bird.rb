class Bird < Animal

    attr_accessor :fly

    def initialize(name, color, mood, age, fly)
        super(name, color, mood, age)
        @fly = fly
    end
   
end