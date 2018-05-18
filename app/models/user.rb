class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true
  # validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :cheese_reviews
  # has_attached_file :avatar, styles: { thumb: '100x100>', square: '200x200#', medium: '300x300>' }

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.generate_unique_session_token
    self.save!
    self.session_token
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
  private

  def ensure_session_token
    self.session_token ||= self.generate_unique_session_token
  end

  def new_session_token
   SecureRandom::urlsafe_base64
  end


end
