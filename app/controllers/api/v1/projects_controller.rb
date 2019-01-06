module Api
  module V1
    class ProjectsController < Api::V1::ApplicationController
      before_action :authorize_access_request!

      def create
        result = Projects::Operations::Create.(current_user: current_user, params: params)
        if (result.success?)
          render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :created
        else
          render json: { data: result['contract.default']&.errors&.messages }.to_json, status: :unprocessable_entity
        end
      end

      def index
        result = Projects::Operations::Index.(current_user: current_user)
        render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json
      end

      def update
        result = Projects::Operations::Update.(current_user: current_user, params: params)
        if (result.success?)
          render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :ok
        else
          render json: { data: result['contract.default']&.errors&.messages }.to_json, status: :unprocessable_entity
        end
      end

      def destroy
        result = Projects::Operations::Destroy.(current_user: current_user, params: params)
        render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :ok
      end
    end
  end
end
