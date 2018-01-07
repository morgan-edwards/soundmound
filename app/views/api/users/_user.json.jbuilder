user_songs = user.songs
user_followers = user.followers
user_followees = user.followees

song_ids = user_songs.map(&:id)
follower_ids = user_followers.map(&:id)
followee_ids = user_followees.map(&:id)

json.user do
  json.extract! user, :id, :username
  json.imageUrl asset_path(user.image.url)
  json.songIds song_ids
  json.followerIds follower_ids
  json.followeeIds followee_ids
end

json.songs do
  json.array! user_songs, partial: 'api/songs/song', as: :song
end
