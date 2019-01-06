module Comments
  module Operations
    class Destroy < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :model
      step Comments::Guards::Destroy.new
      step :process

      pass :prepare_renderer

      def model(ctx, params:, **)
        ctx[:model] = Comment.find(params[:id])
      end

      def process(ctx, **)
        ctx[:model] = ctx[:model].destroy
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
