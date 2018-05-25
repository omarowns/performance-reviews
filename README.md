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
### Backend
```
$
```

### Frontend
```
$
```

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

### Frontend
The frond end is a SPA using React + Redux
```
app-react
├── client
│   ├── actions
│   ├── api
│   ├── components
│   │   └── Admin
│   ├── containers
│   │   └── Admin
│   ├── data
│   ├── reducers
│   ├── styles
│   ├── boilerplate.js
│   └── store.js
├── config.dev.json
├── devServer.js
├── dist
├── index.html
├── package-lock.json
├── package.json
├── readme.md
├── webpack.config.dev.js
└── webpack.config.prod.js
```

It was created using my React + Redux boilerplate.
The application code resides in `client/`.
In these folder I separated `actions`, `components`, `containers`, `reducers` and `styles` into different folders.
The `api` folder holds the endpoint constants and the library to call the backend.
