module Tasks
  module Guards
    class Destroy < ApplicationGuard
      def authorized?(ctx, current_user:, model:, **)
        model.project.user == current_user
      end
    end
  end
end
