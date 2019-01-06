module Comments
  module Operations
    class Index < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :task
      step Comments::Guards::Index.new
      step :model

      step :prepare_renderer

      def task(ctx, params:, **)
        ctx[:task] = Task.find(params[:task_id])
      end

      def model(ctx, task:, **)
        ctx[:model] = task.comments
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
