module Projects
  module Guards
    class Destroy < ApplicationGuard
      def authorized?(ctx, current_user:, model:, **)
        model.user == current_user
      end
    end
  end
end
