class Api::FollowsController < ApplicationController

  def create
    follower = User.find(follow_params.follower_id)
    followee = 
    if @follow.save
      render json: ["sucess"], status:
    else
      render json: @follow..errors.full_messages, status: 422
    end
  end

  def destroy

    if @follow
      @follow.destroy
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
