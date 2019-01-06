module Projects
  module Operations
    class Update < Trailblazer::Operation
      step Lib::Steps::JsonApiRenderer

      step :model
      step Projects::Guards::Update.new
      step Contract::Build(constant: Projects::Contracts::Create)
      step Contract::Validate(key: :project)
      step Contract::Persist()

      pass :prepare_renderer

      def model(ctx, params:, **)
        ctx[:model] = Project.find(params[:id])
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
