# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.delete_all;
seed1 = Todo.create([{title: "Seed the database", body: "Because it's useful for testing", done: false}])
seed2 = Todo.create([{title: "Make an awesome app!", body: "Go!", done: false}])
