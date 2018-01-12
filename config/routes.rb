Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    patch '/users', to: 'users#update'
    get '/users/:id/followees', to: 'users#followees'
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:create, :destroy, :update, :show]
    get '/suggested/songs', to: 'songs#suggested'
    resources :follows, only: [:create]
    post '/unfollow', to: 'follows#destroy'
    get '/search/:query', to: 'songs#search'
  end
end
