# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# pokemon = {
#   '1' => {
#     'name' => 'Bulbasaur',
#     'attack' => 49,
#     'defense' => 49,
#     'poke_type' => 'grass',
#     'moves' => [
#        'tackle',
#        'vine whip'
#     ],
#   },

  guest1 = User.create!(
    username: 'cheese_lover',
    email: 'cheesy_one@mail.net',
    password: 'password1',
    location: 'San Francisco, CA'
  )

  guest2 = User.create!(
    username: 'the_big_cheese',
    email: 'cheesy_two@mail.net',
    password: 'password2',
    location: 'Philadelphia, PA'
  )

  guest3 = User.create!(
    username: 'cheesehead',
    email: 'cheesy_three@mail.net',
    password: 'password3',
    location: 'Champaign, IL'
  )

  guest4 = User.create!(
    username: 'guest',
    email: 'guest@mail.net',
    password: 'password',
    location: 'Boston, MA'
  )

  guest5 = User.create!(
    username: 'fake_user',
    email: 'fake@mail.net',
    password: 'password5',
    location: 'Hoboken, NJ'
  )

  guest6 = User.create!(
    username: 'guest',
    email: 'guest1@mail.net',
    password: 'password6',
    location: 'Wilmington, NC'
  )

  guest7 = User.create!(
    username: 'guest',
    email: 'guest2@mail.net',
    password: 'password7',
    location: 'Orlando, FL'
  )

  guest8 = User.create!(
    username: 'guest',
    email: 'guest3@mail.net',
    password: 'password8',
    location: 'Austin, TX'
  )

  guest9 = User.create!(
    username: 'guest',
    email: 'guest4@mail.net',
    password: 'password9',
    location: 'Seattle, WA'
  )

  guest10 = User.create!(
    username: 'guest',
    email: 'guest5@mail.net',
    password: 'password10',
    location: 'San Diego, CA'
  )

  guest11 = User.create!(
    username: 'guest',
    email: 'guest6@mail.net',
    password: 'password11',
    location: 'CDMX'
  )

  cheese1 = Cheese.create!(
    name: 'Vermont Sharp-White Cheddar',
    description: 'Vermont sharp-white is a sharp cheddar boasting stronger sulfur tones than other cheddars. It has a smooth consistency and a complex flavor profile. It goes especially well with Triscuits.',
    brand: 'Cracker Barrel',
    origin: 'USA',
    category: 'cheddar'
  )

  cheese2 = Cheese.create!(
    name: 'Drunken Goat Cheese',
    description: 'Drunken goat cheese is made from the pasteurized milk of Murciana goats in southeastern Spain. It is then soaked in red wine for 2-3 days, resulting in a purple rind. Afterwards, it is aged for two and a half months. The flavor is distinctive; it is sharp yet mellow at the same time. The texture is semi-soft and creamy.',
    brand: 'Cheese Pride',
    origin: 'Spain',
    category: 'goat/sheep'
  )

  cheese3 = Cheese.create!(
    name: 'Manchego',
    description: 'Manchego is a sheep milk cheese from the La Mancha region of Spain. It has a distinctive but mild flavor with a characteristic goat cheese aftertaste. It is firm and compact with a buttery texture.',
    brand: 'Trader Joe\'s',
    origin: 'Spain',
    category: 'goat/sheep'
  )

  cheese4 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese5 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese6 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese7 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese8 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese9 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese10 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese11 = Cheese.create!(
    name: 'Gruyère',
    description: 'Good melting cheese',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )
