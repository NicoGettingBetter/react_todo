module Comments
  module Operations
    class Create < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :task
      step Comments::Guards::Create.new
      step :model

      step Contract::Build(constant: Comments::Contracts::Create)
      step Contract::Validate()
      step Contract::Persist()

      pass :prepare_renderer

      def task(ctx, params:, **)
        ctx[:task] = Task.find(params[:task_id])
      end

      def model(ctx, task:, **)
        ctx[:model] = task.comments.build
      end

      def prepare_renderer(ctx, **)
        ctx[:renderer_options] = {
          class: {
            Comment: Comments::Representers::Show
          }
        }
      end
    end
  end
end
