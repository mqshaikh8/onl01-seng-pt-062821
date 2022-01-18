class Restraunt
    require 'tty-prompt'
    def start
        puts 'Welcome to our diner'
        user_prompt = TTY::Prompt.new
        @user = user_prompt.ask('What is your name?', required: true)
        puts @user
        menu
    end

    def menu
        menu_prompt = TTY::Prompt.new
        puts 'Here is the menu'
        menuArr = Dish.all.map do |dish|
            dish.name
        end
        @dish = menu_prompt.select('What dish will eat today ? ', [menuArr])
        order
    end

    def order
        foundDish = Dish.all.find do |dish|
            dish.name == @dish
        end
        puts "Here is your dish #{@user}"
        puts " #{@dish.name} from #{@dish.location}"
    end


end


# hosts
# gives dishes
