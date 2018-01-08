class Api::SongsController < ApplicationController

  def create
    debugger
    @song = User.find(song_params[:user_id]).songs.new(song_params)
    if @song.save!
      render json: ["Success!"]
    else
      render json: ["Failed to upload song."]
    end
  end

  private

  def song_params
    params.require(:song).permit(:user_id, :title, :track, :image)
  end

end
