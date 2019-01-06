class Comment < ApplicationRecord
  include FileUploader[:file]

  belongs_to :task
end
