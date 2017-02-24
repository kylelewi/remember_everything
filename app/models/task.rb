class Task < ApplicationRecord
  validates :name, :user_id, presence: true
  # validates :estimate, numericality: { only_integer: true }

  belongs_to :user


end
