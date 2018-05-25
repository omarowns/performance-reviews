Rails.application.routes.draw do
  resources :employees do
    resources :reviews, except: [:index] do
      get 'pending', on: :collection
      get 'feedbacks', on: :collection
      post 'finish', on: :member
    end
  end
end
