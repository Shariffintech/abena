class User < ApplicationRecord
  enum role: {teacher: 0, ece_professional: 1, ece_admin: 2}
ß
  has_many :classrooms, dependent: :destroy
  has_many :students, through: :classrooms
  # Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, :trackable



   def self.from_omniauth(auth)
    where(email: auth.info.email).first_or_initialize do |user|
      user.email = auth.info.email
      user.password = user.password_confirmation = SecureRandom.hex
    end
    
  end
end
