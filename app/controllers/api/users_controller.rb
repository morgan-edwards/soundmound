class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      render json: ["User not found"], status: 404
    end
  end

  def followees
    @user = User.find(params[:id])
    @users = @user.followees.includes(:songs, :follows_as_followee, :followers, :follows_as_follower)
    render '/api/users/users'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
