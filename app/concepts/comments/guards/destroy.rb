module Comments
  module Guards
    class Destroy < ApplicationGuard
      def authorized?(ctx, current_user:, model:, **)
        model.task.project.user == current_user
      end
    end
  end
end
