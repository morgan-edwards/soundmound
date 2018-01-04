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

end
