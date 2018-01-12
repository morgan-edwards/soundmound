class Api::SongsController < ApplicationController
  require 'uri'

  def create
    @user = User.find(song_params[:user_id])
    @song = @user.songs.new(song_params)
    if @song.save!
      render '/api/users/show'
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
    @user = @song.user
    render '/api/users/show'
  end

  def update
    @user = User.find(song_params[:user_id])
    song = @user.songs.find(song_params[:id])
    song.title = song_params[:title]

    if song_params[:image]
      song.image = song_params[:image]
    end

    if song.save!
      render '/api/users/show'
    else
      render json: song.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find(song_params[:user_id])
    @song = user.songs.find(song_params[:id])
    if @song.destroy!
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def search
    query = CGI::unescape(params[:query])
    song_ids = PgSearch.multisearch(query).map(&:searchable_id)
    @songs = Song.includes(:user).where(id: song_ids)
    render '/api/songs/songs'
  end

  private

  def song_params
    params.require(:song).permit(:id, :user_id, :title, :track, :image)
  end

end
