module Tasks
  module Operations
    class Destroy < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :model
      step Tasks::Guards::Destroy.new
      step :process

      pass :prepare_renderer

      def model(ctx, params:, **)
        ctx[:model] = Task.find(params[:id])
      end

      def process(ctx, model:, **)
        ctx[:model] = model.destroy
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
