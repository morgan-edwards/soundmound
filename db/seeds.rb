# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Song.destroy_all
Follow.destroy_all

guest = User.create!(username: 'Guest', password: 'password')

usernames = ['Guest']

25.times do
  username = Faker::Kpop.girl_groups
  usernames << username
  User.create(username: Faker::Kpop.girl_groups, password: Faker::Internet.password(10))
end

users = User.all.map {|user| user.id}

p "Created #{User.count} users!"

nums = (1..3).to_a
100.times do
  Song.create!(title: Faker::Hipster.words(2).join(' '),
                user_id: users.sample)
end

p "Created #{Song.count} songs!"

10.times do
  followee = users.sample
  follower = guest.id
  Follow.create(follower_id: follower, followee_id: users.sample)
end

100.times do
  followee = users.sample
  follower = users.sample
  Follow.create(follower_id: follower, followee_id: users.sample)
end

p "Created #{Follow.count} follows!"
