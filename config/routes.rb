Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :cheese_reviews
    resources :cheeses
    resources :users
    resource :session, only: [:create, :destroy, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
