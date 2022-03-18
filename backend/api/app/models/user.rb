class User < ApplicationRecord
  # Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, :trackable

         enum role: {teacher: 0, ece_professional: 1, ece_admin: 2}
end
