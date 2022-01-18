# We need interactivity
# functions for arithmetic operations
require 'colorize'

puts '''
//////////////////////////////
Welcome to the Calculator
//////////////////////////////
'''.blue


#console.log('For additon, press 1')
puts 'For additon, press 1'
#console.log('For subtraction, press 2')
puts 'For subtraction, press 2'
#console.log('For multiplication, press 3')
puts 'For multiplication, press 3'
#console.log('For division, press 4')
puts 'For division, press 4'

# const input = get_input `gets`

input = gets.to_i

#console.log('What is the first number?')
puts 'What is the first number?'
# const numberOne = get_input
numberOne = gets.to_i
#console.log('What is the Second number?')
puts 'What is the second number?'
# const numberTwo = get_input
numberTwo = gets.to_i

# if(input === 1){
#     console.log(numberOne + numberTwo)
# }
# else if()
result = 0

def operation (input, numberOne, numberTwo)
    if input == 1
        return numberOne + numberTwo
    elsif input == 2
        return  numberOne - numberTwo
    elsif input == 3
        return  numberOne / numberTwo
    elsif input == 4
        return numberOne * numberTwo
    else 
        return 'Wrong Input'
    end
    
end

result = operation(input, numberOne, numberTwo)

puts '////////////////////////'
p "Your answer is"  + " #{result}"
puts '////////////////////////'



