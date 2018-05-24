Rails.application.routes.draw do
  resources :employees
  resources :reviews do
    post 'finish', on: :member
  end
end
