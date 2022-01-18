class Cat < Animal
    attr_accessor :lives

    def initialize(name, color, mood, age, lives)
        super(name, color, mood, age)
        @lives = lives
    end

    def speak
        super + 'I meow'
    end

end