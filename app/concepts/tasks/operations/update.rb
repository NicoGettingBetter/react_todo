module Tasks
  module Operations
    class Update < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :model
      step Tasks::Guard::Update.new
      step Contract::Build(constant: Tasks::Contracts::Update)
      step Contract::Validate(key: :task)
      step Contract::Persist()

      pass :prepare_renderer

      def model(ctx, params:, **)
        ctx[:model] = Task.find(params[:id])
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
