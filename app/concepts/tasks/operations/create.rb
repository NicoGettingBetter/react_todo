module Tasks
  module Operations
    class Create < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :project
      step Tasks::Guards::Create.new
      step :model

      step Contract::Build(constant: Tasks::Contracts::Create)
      step Contract::Validate(key: :task)
      step Contract::Persist()

      pass :prepare_renderer

      def project(ctx, params:, **)
        ctx[:project] = Project.find(params.dig(:task, :project_id))
      end

      def model(ctx, project:, **)
        ctx[:model] = project.tasks.build
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
