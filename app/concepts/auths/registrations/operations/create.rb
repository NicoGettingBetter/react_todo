module Auths
  module Registrations
    module Operations
      class Create < Trailblazer::Operation
        step Model(User, :new)
        step Contract::Build(constant: Auths::Registrations::Contracts::Create)
        step Contract::Validate(key: :user)
        step Contract::Persist()
      end
    end
  end
end
