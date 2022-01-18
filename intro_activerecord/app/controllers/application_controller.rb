require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    Author.create(name:'Sinatra')
    Author.find(3)
    erb :welcome
  end

end
