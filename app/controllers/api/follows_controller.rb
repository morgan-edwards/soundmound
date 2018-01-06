class Api::FollowsController < ApplicationController

  def create
    debugger
    @follow = Follow.new(follow_params)
    if @follow.save
      render json: ["sucess"], status: 200
    else
      render json: @follow..errors.full_messages, status: 422
    end
  end

  def destroy
    follower = User.find(follow_params[:follower_id])
    debugger
    if follower.followees.delete(User.find(follow_params[:followee_id]))
      render json: {}
    else
      render json: @follow..errors.full_messages, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
