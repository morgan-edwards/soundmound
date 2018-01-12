json.id song.id
json.title song.title
json.userId song.user_id
json.artist song.user.username
json.trackUrl asset_path(song.track.url)
json.playCount song.play_count
json.createdAt song.created_at

if song.image.url == "no-image"
  json.imageUrl asset_path(song.image.url)
else
  json.imageUrl asset_path(song.user.image.url)
end
