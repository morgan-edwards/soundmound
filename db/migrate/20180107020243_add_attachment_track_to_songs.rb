class AddAttachmentTrackToSongs < ActiveRecord::Migration[5.1]
  def self.up
    change_table :songs do |t|
      t.attachment :track
    end
  end

  def self.down
    remove_attachment :songs, :track
  end
end
