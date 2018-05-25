# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jd = ::Employee.create(name: 'John Doe')
ts = ::Employee.create(name: 'Tony Stark')
cp = ::Employee.create(name: 'Chris Pratt')
og = ::Employee.create(name: 'Omar Garcia')

::Review.create(reviewer: jd, reviewee: ts)
::Review.create(reviewer: jd, reviewee: cp)
::Review.create(reviewer: jd, reviewee: og)
::Review.create(reviewer: cp, reviewee: og)
::Review.create(reviewer: og, reviewee: ts)
::Review.create(reviewer: og, reviewee: jd)
