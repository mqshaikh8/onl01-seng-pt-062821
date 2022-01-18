class Animal

    attr_accessor :name, :color, :mood, :age

    def initialize(name, color, mood, age)
      @name = name
      @color = color
      @mood = mood
      @age = age
    end

    def speak
        "Hi I am a #{self.class}"
    end
    

end
