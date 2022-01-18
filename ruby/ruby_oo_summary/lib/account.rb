#create an account
#deposit / withdraw
class Account 
    attr_accessor :id, :balance, :bank, :owner
    def initialize( bank, owner)
        @id = SecureRandom.uuid
        @balance = 500
        @bank = bank
        @owner = owner
        @own_amount = 0
        @bank.accts << self
        # Bank.all.find{|b| b.id == bank.id}.accts << self
    end

    def finance(amount)
        self.bank.bank_balance -= amount
        @owed_amount += amount
        @balance += amount
    end

    def deposit(amount)
        self.owner.money -= amount
        self.bank.bank_balance += amount
        @balance += amount
    end

    def withdraw(amount)
        self.owner.money += amount
        self.bank.bank_balance -= amount
        @balance -= amount
    end

end