user_songs = user.songs
song_ids = user_songs.map(&:id)
followee_ids = user.follows_as_follower.map(&:followee_id)
follower_ids = user.follows_as_followee.map(&:follower_id)

json.user do
  json.extract! user, :id, :username
  json.imageUrl asset_path(user.image.url)
  json.bannerUrl asset_path(user.banner.url)
  json.songIds song_ids
  json.followerIds follower_ids
  json.followeeIds followee_ids
end

json.songs do
  json.array! user_songs, partial: 'api/songs/song.json.jbuilder', as: :song
end
