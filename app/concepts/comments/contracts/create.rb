module Comments
  module Contracts
    class Create < Reform::Form
      include Dry

      property :content
      property :file

      validation :default do
        required(:content).filled(:str?)
      end

      # def file=(value)
      #   super(File.open(value))
      # end
    end
  end
end
