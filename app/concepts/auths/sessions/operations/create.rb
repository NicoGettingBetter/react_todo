module Auths
  module Sessions
    module Operations
      class Create < Trailblazer::Operation
        step Lib::Steps::JsonApiRenderer

        step Contract::Build(constant: Auths::Sessions::Contracts::Create)
        step Contract::Validate(key: :user)

        step :model
        step :authenticate
        step :session
        pass :prepare_renderer

        def model(ctx, **)
          ctx[:model] = User.find_by!(login: ctx['contract.default'].login)
        end

        def authenticate(ctx, model:, **)
          model.authenticate(ctx['contract.default'].password)
        end

        def session(ctx, model:, **)
          ctx[:session] = JWTSessions::Session.new(payload: { user_id: model.id })
        end

        def prepare_renderer(ctx, session:, **)
          ctx[:renderer_options] = {
            class: {
              User: Auths::Sessions::Representers::Create
            },
            meta: { jwt: session.login }
          }
        end
      end
    end
  end
end
