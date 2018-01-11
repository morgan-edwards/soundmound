# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  img_url            :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :image, default_url: "user_default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :banner, default_url: ""
  validates_attachment_content_type :banner, content_type: /\Aimage\/.*\z/

  has_many :songs,
    dependent: :destroy,
    class_name: 'Song',
    foreign_key: 'user_id'

  has_many :follows_as_follower,
    dependent: :destroy,
    class_name: 'Follow',
    foreign_key: 'follower_id'

  has_many :follows_as_followee,
    dependent: :destroy,
    class_name: 'Follow',
    foreign_key: 'followee_id'

  has_many :followers,
    through: :follows_as_followee,
    source: :follower

  has_many :followees,
    through: :follows_as_follower,
    source: :followee


  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.correct_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def correct_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
