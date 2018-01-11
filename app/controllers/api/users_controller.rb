class Api::UsersController < ApplicationController

  def create
    login_params = { username: user_params[:username],  password: user_params[:password]}
    @user = User.new(login_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    @users = User.includes(
        :songs,
        :followers,
        :followees,
        :follows_as_followee,
        :follows_as_follower
    ).where(id: @user.followee_ids + @user.follower_ids + [@user.id])

    if @user
      render '/api/users/users'
    else
      render json: ["User not found"], status: 404
    end
  end

  def update
    @user = User.find(user_params[:id])
    if @user.id != current_user.id
      render json: ["Unauthorized update"], status: 422
    end
    @user.username = user_params[:username]
    if user_params[:image]
      @user.image = user_params[:image]
    end
    if user_params[:banner]
      @user.banner = user_params[:banner]
    end
    if @user.save!
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def followees
    @user = User.find(params[:id])
    @users = @user.followees.includes(:songs, :follows_as_followee, :followers, :follows_as_follower)
    render '/api/users/users'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :banner, :image, :id)
  end
end
