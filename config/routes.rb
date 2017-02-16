Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tasks, only: [:index, :show, :create]
    resources :lists, only: [:index, :create]
  end

  root "static_pages#root"
end
