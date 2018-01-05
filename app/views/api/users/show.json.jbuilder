user_songs = @user.songs
song_ids = user_songs.map(&:id)

json.user do
  json.partial! '/api/users/user', user: @user
  json.songIds song_ids
end

json.partial! '/api/songs/songs', songs: user_songs
