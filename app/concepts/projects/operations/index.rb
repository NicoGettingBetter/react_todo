module Projects
  module Operations
    class Index < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :model

      step :prepare_renderer

      def model(ctx, current_user:, **)
        ctx[:model] = current_user.projects
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
