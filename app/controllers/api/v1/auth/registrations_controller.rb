module Api
  module V1
    module Auth
      class RegistrationsController < Api::V1::ApplicationController
        def create
          result = Auths::Registrations::Operations::Create.(params: params)
          if (result.success?)
            head :created
          else
            render json: result['contract.default']&.errors&.messages.to_json, status: :unprocessable_entity
          end
        end
      end
    end
  end
end
