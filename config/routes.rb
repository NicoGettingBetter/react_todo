Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :auth do
        resources :sessions, only: %i[create]
        resources :registrations, only: %i[create]
      end

      resources :projects, only: %i[create index update destroy]
      resources :tasks, only: %i[create index update destroy]
      resources :comments, only: %i[create index update destroy]
    end
  end

  root to: 'pages#root'
  get '/*path', to: 'pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
