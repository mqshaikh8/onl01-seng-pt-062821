#creates acct
class Customer

    attr_accessor :name,:money, :accts

    def initialize(name)
      @name = name
      @money = 1000
      @accts = []
    end

    def create_acct(bank)
        @accts << Account.new(bank, self)
    end

end