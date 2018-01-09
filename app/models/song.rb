# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  play_count :integer          default(0)
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user

  has_attached_file :image, default_url: :define_default_img
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :track, default_url: "default_track.mp3"
  validates_attachment_content_type :track,
    content_type: ['audio/mpeg', 'audio/mp3'],
    file_name: { matches: [/mp3\Z/] }

  def to_partial_path
    'api/songs/songs'
  end

  private

  def define_default_img
    user.image.url
  end

end
