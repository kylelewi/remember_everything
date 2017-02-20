Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    get 'tasks/filter/:filter_term' => 'tasks#filter'
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tasks, except: [:new, :edit]
    resources :lists, only: [:index, :create]


  end

  root "static_pages#root"
end
