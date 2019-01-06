# enabled deprecations to avoid old style
# require "trailblazer/deprecation/call"
# require "trailblazer/deprecation/context"

require 'reform'
require 'reform/form/dry'
# require 'reform/form/coercion'
require 'jsonapi/serializable'

Rails.application.configure do
  config.trailblazer.use_loader = false
  config.trailblazer.application_controller = 'Api::V1::ApplicationController'
end
