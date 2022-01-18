#initialize

class Bank
    attr_accessor :id, :name, :bank_balance, :accts
    @@all = []
    def initialize(name)
        @id = SecureRandom.uuid
        @name = name
        @bank_balance = 1000
        @accts = []
        @@all << self
    end

    def self.all

        @@all
    end


end