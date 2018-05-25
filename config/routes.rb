Rails.application.routes.draw do
  resources :employees, only: [:index, :show] do
    resources :reviews, except: [:index, :destroy, :create] do
      get 'pending', on: :collection
      get 'feedbacks', on: :collection
      post 'finish', on: :member
    end
  end

  namespace :admin do
    resources :employees
    resources :reviews, except: [:destroy]
  end
end
