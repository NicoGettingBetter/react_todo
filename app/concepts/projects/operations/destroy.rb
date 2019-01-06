module Projects
  module Operations
    class Destroy < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :model
      step Projects::Guards::Destroy.new
      step :process

      pass :prepare_renderer

      def model(ctx, params:, **)
        ctx[:model] = Project.find(params[:id])
      end

      def process(ctx, model:, **)
        ctx[:model] = model.destroy
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
