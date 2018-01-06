user_songs = @user.songs
user_followers = @user.followers
user_followees = @user.followees

song_ids = user_songs.map(&:id)
follower_ids = user_followers.map(&:id)
followee_ids = user_followees.map(&:id)


json.user do
  json.partial! '/api/users/user', user: @user
  json.songIds song_ids
  json.followerIds follower_ids
  json.followeeIds followee_ids


end

json.partial! '/api/songs/songs', songs: user_songs
