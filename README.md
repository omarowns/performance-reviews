# README

## Ruby version
```
2.3.1
```

## System dependencies
```
postgresql
node version 6+
```

## Configuration
Installation:
```
$ bundle install
$ cd app-react && npm install
```

Running:
```
$ rails s
# cd app-react && npm start
```

## Database creation
```
$ rake db:create
```

## Database initialization
```
$ rake db:seed
```

## How to run the test suite
```
$ rails test
```

## Services (job queues, cache servers, search engines, etc.)
N/A

## Deployment instructions

## Architecture
### Backend
- Ruby on Rails 5.2 API
- `fast_jsonapi` for serializing data

2 Models: Employee and Review (short for PerformanceReview)
An Employee can have multiple Reviews as the reviewer
An Employee can have multiple Reviews as the reviewee (my feedback from other peers)

A Review has a Status, Feedback text and 2 foreign keys that belong to the `reviewer` and the `reviewee`

Controllers are organized as:
```
app/controllers
├── admin
│   ├── employees_controller.rb
│   └── reviews_controller.rb
├── application_controller.rb
├── concerns
├── employees_controller.rb
└── reviews_controller.rb
```
The `admin` name space is a simple CRUD for each of the resources independently
The root namespace holds a more conventional RESTful API, ie: has routes like
```
/employee/:employee_id/reviews/:id
```
The root namespace doesn't implements all the CRUD for the models, only the ones needed.
