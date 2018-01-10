class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @users = User.includes(:songs, :follows_as_follower, :follows_as_followee)
                    .find(@follow.followee_id, @follow.follower_id)
      render '/api/users/users'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follow_params)
    follower = User.find(follow_params[:follower_id])
    if follower.followees.delete(User.find(follow_params[:followee_id]))
      @users = User.includes(:songs, :follows_as_follower,
        :follows_as_followee).find(@follow.followee_id, @follow.follower_id)
      render '/api/users/users'
    else
      render json: @follow..errors.full_messages, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
