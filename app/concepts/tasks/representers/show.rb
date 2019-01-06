module Tasks
  module Representers
    class Show < ApplicationRepresenter
      attributes :name,
                 :project_id,
                 :done,
                 :deadline,
                 :position
    end
  end
end
