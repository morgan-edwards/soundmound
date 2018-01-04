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

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
