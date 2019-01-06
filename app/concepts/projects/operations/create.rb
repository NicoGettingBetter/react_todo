module Projects
  module Operations
    class Create < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :model
      step Contract::Build(constant: Projects::Contracts::Create)
      step Contract::Validate(key: :project)
      step Contract::Persist()

      pass :prepare_renderer

      def model(ctx, current_user:, **)
        ctx[:model] = current_user.projects.build
      end

      def prepare_renderer(ctx, **)
        ctx[:renderer_options] = {
          class: {
            Project: Projects::Representers::Show
          }
        }
      end
    end
  end
end
