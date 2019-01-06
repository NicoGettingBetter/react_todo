module Auths
  module Registrations
    module Contracts
      class Create < Reform::Form
        include Dry

        MIN_PASSWORD_LENGTH = 6

        property :login
        property :password
        property :password_confirmation

        validation :default do
          required(:login).filled(:str?)
          required(:password).filled(:str?, min_size?: MIN_PASSWORD_LENGTH).confirmation
        end

        validation :login_uniqueness, if: :default, with: { form: true } do
          configure do
            config.messages = :i18n
            option :form

            def login_unique?(attr_name, value)
              model = form.model
              model.class.where(attr_name => value).empty?
            end
          end

          required(:login).filled(login_unique?: :login)
        end
      end
    end
  end
end
