module Lib
  module Steps
    class JsonApiRenderer
      extend Uber::Callable

      def self.call(ctx, **)
        ctx[:representer] = ::JSONAPI::Serializable::Renderer
      end
    end
  end
end
