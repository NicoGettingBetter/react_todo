module Auths
  module Sessions
    module Contracts
      class Create < Reform::Form
        include Dry

        property :login, virtual: true
        property :password, virtual: true

        validation :default do
          required(:login).filled(:str?)
          required(:password).filled(:str?)
        end
      end
    end
  end
end
