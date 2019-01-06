module Tasks
  module Operations
    class Index < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :project
      step Tasks::Guards::Index.new
      step :model

      step :prepare_renderer

      def project(ctx, params:, **)
        ctx[:project] = Project.find(params[:project_id])
      end

      def model(ctx, project:, **)
        ctx[:model] = project.tasks
      end

      def prepare_renderer(ctx, **)
        ctx[:renderer_options] = {
          class: {
            Task: Tasks::Representers::Show
          }
        }
      end
    end
  end
end
