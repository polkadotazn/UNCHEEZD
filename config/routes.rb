Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :cheeses do
      resources :cheese_reviews, only: [:destroy, :update, :edit]
    end
    resources :cheese_reviews, only: [:create, :new]
    resources :users
    resource :session, only: [:create, :destroy, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
end
