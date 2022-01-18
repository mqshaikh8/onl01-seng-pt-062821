#!/usr/bin/env ruby
require_relative '../config/enviroment'


puts 'hello'

dish = Dish.new('rice','india')
dish_one = Dish.new('fish fillet', 'mcDonalds')

Restraunt.new.start

binding.pry


#  