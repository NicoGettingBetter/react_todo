module Tasks
  module Guards
    class Index < ApplicationGuard
      def authorized?(ctx, current_user:, project:, **)
        project.user == current_user
      end
    end
  end
end
