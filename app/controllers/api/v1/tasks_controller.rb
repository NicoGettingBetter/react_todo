module Api
  module V1
    class TasksController < Api::V1::ApplicationController
      before_action :authorize_access_request!

      def create
        result = Tasks::Operations::Create.(current_user: current_user, params: params)
        if (result.success?)
          render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :created
        else
          render json: { data: result['contract.default']&.errors&.messages }.to_json, status: :unprocessable_entity
        end
      end

      def index
        result = Tasks::Operations::Index.(current_user: current_user, params: params)
        render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json
      end

      def update
        result = Tasks::Operations::Update.(current_user: current_user, params: params)
        if (result.success?)
          render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :ok
        else
          render json: { data: result['contract.default']&.errors&.messages }.to_json, status: :unprocessable_entity
        end
      end

      def destroy
        result = Tasks::Operations::Destroy.(current_user: current_user, params: params)
        render json: result[:representer].new.render(result[:model], result[:renderer_options]).to_json, status: :ok
      end
    end
  end
end
