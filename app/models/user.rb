class User < ApplicationRecord
    validates :username,  presence: true, length: { mininum: 3, maximum: 15 }
    validates_uniqueness_of :username
    has_secure_password
end