class MakeFollowsUnique < ActiveRecord::Migration[5.1]
  def change
    add_index :follows, [ :followee_id, :follower_id ], unique: true
  end
end
