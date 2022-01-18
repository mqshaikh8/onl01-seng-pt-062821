class Pokemon < ApplicationRecord
    has_one :sprite, dependent: :destroy
    validates :name, presence: true


    def greeting
        "Hi, My Name is #{self.name}"
    end
end
