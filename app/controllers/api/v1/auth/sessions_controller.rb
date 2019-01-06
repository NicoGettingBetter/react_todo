module Api
  module V1
    module Auth
      class SessionsController < Api::V1::ApplicationController
        def create
          result = Auths::Sessions::Operations::Create.(params: params)
          if (result.success?)
            render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :created
          else
            render json: result['contract.default']&.errors&.messages.to_json, status: :unprocessable_entity
          end
        end
      end
    end
  end
end
