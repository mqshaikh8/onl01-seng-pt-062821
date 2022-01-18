class AuthorsController < ApplicationController

    configure do
      set :public_folder, 'public'
      set :views, 'app/views'
    end

    get "/authors" do
      Author.all.to_json(include: [books:{only: [:id, :title]}], except:[ :created_at, :updated_at])
    end

    post "/authors" do
      # binding.pry
      author = Author.new(params)
      if author.save
          author.to_json
      else
        {errors: author.errors.full_messages}.to_json
      end
      
    end
  
  end