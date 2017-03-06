class Task < ActiveRecord::Base
  validates :name, :user_id, presence: true
  # validates :estimate, numericality: { only_integer: true }

  belongs_to :user


end
