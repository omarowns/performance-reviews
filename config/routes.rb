Rails.application.routes.draw do
  mount_devise_token_auth_for 'Employee', at: 'auth'
  resources :employees
  resources :reviews
end
