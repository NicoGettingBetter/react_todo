module Tasks
  module Contracts
    class Update < Reform::Form
      include Dry

      property :name
      property :deadline
      property :done
      property :position

      validation :default do
        required(:name).filled(:str?)
      end
    end
  end
end
