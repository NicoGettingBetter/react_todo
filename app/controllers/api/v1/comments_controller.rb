module Api
  module V1
    class CommentsController < Api::V1::ApplicationController
      before_action :authorize_access_request!

      def create
        result = Comments::Operations::Create.(current_user: current_user, params: params)
        if (result.success?)
          render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :created
        else
          render json: { data: result['contract.default']&.errors&.messages }.to_json, status: :unprocessable_entity
        end
      end

      def index
        result = Comments::Operations::Index.(current_user: current_user, params: params)
        render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json
      end

      def destroy
        result = Comments::Operations::Destroy.(current_user: current_user, params: params)
        render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :ok
      end
    end
  end
end
