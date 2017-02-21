Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    get 'filter' => 'tasks#index'
    get 'filter/:filter_term' => 'tasks#filter'
    patch 'tasks/complete' => 'tasks#bulk_update_complete'
    patch 'tasks/date' => 'tasks#bulk_update_due_date'
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :tasks, except: [:new, :edit]
    resources :lists, only: [:index, :create]


  end

  root "static_pages#root"
end
