class Api::SongsController < ApplicationController

  def create
    @song = User.find(song_params[:user_id]).songs.new(song_params)
    if @song.save!
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def update
    user = User.find(song_params[:user_id])
    @song = user.songs.find(song_params[:id])
    @song.title = song_params[:title]

    if song_params[:image]
      @song.image = song_params[:image]
    end

    if @song.save!
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:id, :user_id, :title, :track, :image)
  end

end
