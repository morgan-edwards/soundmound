song_hash = {}

songs.each do |song|
  song_hash[song.id] = song
end

json.songs song_hash
