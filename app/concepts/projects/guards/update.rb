module Projects
  module Guards
    class Update < ApplicationGuard
      def authorized?(ctx, current_user:, model:, **)
        model.user == current_user
      end
    end
  end
end
