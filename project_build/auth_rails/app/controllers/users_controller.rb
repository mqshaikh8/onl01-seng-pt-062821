class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy, :persist]

  def index
    @users = User.all

    render json: @users
  end

  def show
    render json: @user
  end


  def login
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      wristband = encode_token({user_id: @user.id})
      render json: {user: @user, token: wristband}
    else
      render json: {error: "Invalid username or password"}
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      wristband = encode({user_id: @user.id})
      render json: {user: @user, token: wristband}, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  def persist
    wristband = encode_token({user_id: @user.id})
    render json: {user: @user, token: wristband}
  end

  private
    def set_user
      if decode_token
        id = decode_token[0]['user_id']
        @user = User.find(id) 
      else
        render json:{error:"User is not logged in / Key was not provided"}
      end
    end

    def user_params
      params.require(:user).permit(:username, :age, :password_digest)
    end
end
