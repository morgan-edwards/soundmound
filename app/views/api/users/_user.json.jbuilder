songs = user.songs

json.extract! user, :id, :username
json.user :songs
