module Tasks
  module Contracts
    class Create < Reform::Form
      include Dry

      property :name

      validation :default do
        required(:name).filled(:str?)
      end
    end
  end
end
