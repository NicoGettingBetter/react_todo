module Api
  module V1
    class ApplicationController < ActionController::API
      include JWTSessions::RailsAuthorization
      # rescue_from JWTSessions::Errors::Unauthorized, with: :not_authorized

      def current_user
        @current_user ||= User.find(payload['user_id'])
      end

      # private
      #
      # def not_authorized
      #   render json: { error: 'Not authorized' }, status: :unauthorized
      # end

      # rescue_from ApplicationError::Unauthorized do
      #   exception_respond(:unauthorized, I18n.t('errors.unauthenticated'))
      # end
      #
      # rescue_from ApplicationError::Forbidden do
      #   exception_respond(:forbidden, I18n.t('errors.forbidden'))
      # end
      #
      # rescue_from ActiveRecord::RecordNotFound do |exception|
      #   exception_respond(:not_found, exception.message.truncate_words(3))
      # end
      #
      # rescue_from JWTSessions::Errors::Unauthorized do |exception|
      #   exception_respond(:unauthorized, I18n.t('errors.unauthenticated'))
      # end
      #
      # private
      #
      # def exception_respond(status, message)
      #   render json: Lib::Representers::JsonApiExceptionError.new(message).to_json, status: status
      # end
    end
  end
end
