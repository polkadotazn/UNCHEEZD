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
    username: 'cheeseball',
    email: 'guest1@mail.net',
    password: 'password6',
    location: 'Wilmington, NC'
  )

  guest7 = User.create!(
    username: 'my_girl',
    email: 'guest2@mail.net',
    password: 'password7',
    location: 'Orlando, FL'
  )

  guest8 = User.create!(
    username: 'bmyguest',
    email: 'guest3@mail.net',
    password: 'password8',
    location: 'Austin, TX'
  )

  guest9 = User.create!(
    username: 'cheesinator',
    email: 'guest4@mail.net',
    password: 'password9',
    location: 'Seattle, WA'
  )

  guest10 = User.create!(
    username: 'obama',
    email: 'guest5@mail.net',
    password: 'password10',
    location: 'San Diego, CA'
  )

  guest11 = User.create!(
    username: 'boop',
    email: 'guest6@mail.net',
    password: 'password11',
    location: 'CDMX'
  )

  cheese1 = Cheese.create!(
    name: 'Vermont Sharp-White Cheddar',
    description: 'Vermont sharp-white is a sharp cheddar boasting stronger sulfur tones than other cheddars. It has a smooth consistency and a complex flavor profile.',
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
    name: 'Cacio di Bosco al Tartufo',
    description: 'This pecorino won’t overwhelm with too much astringency and ensures an elegant play of the flavors you’re seeking: the title role of black truffle and its beloved chorus, butter and salt. There are a few different species of truffle, but Cacio di Bosco al Tartufo contains Tuber melanosporum, the black truffle. If you’re looking for a truffle pecorino to grate, this is the one. The barely detectable grain is so fine that it shaves beautifully into long, feather-light strips,    making elegant pasta dishes effortless.',
    brand: 'Di Bruno Brothers',
    origin: 'Tuscany, Italy',
    category: 'hard'
  )

  cheese5 = Cheese.create!(
    name: 'Normandie Brie',
    description: 'Gooey with a desirable snap on the rind, this classic brie will provide a rich, buttery backdrop for whatever fixin’s you have. Emmanating notes of rich, fresh cream topped with tones of earthy, button mushrooms, Normandie Brie’s thick, fluffy rind provides a pleasant bite.',
    brand: 'Di Bruno Bros',
    origin: 'France',
    category: 'soft-ripening'
  )

  cheese6 = Cheese.create!(
    name: 'Colston Bassett Stilton',
    description: 'Colston-Bassett Dairy has been making Stilton the old-fashioned way since the early 20th-century. They source their milk from only five neighboring farms and that attention to detail and quality shows through in the finished product. This blue is formidable, there\'s no denying that. But the strength of the penicillium roqueforti doesn\'t overpower flavors of lush, grassy milk.',
    brand: 'Di Bruno Bros',
    origin: 'UK',
    category: 'blue'
  )

  cheese7 = Cheese.create!(
    name: '1000 Day Gouda',
    description: 'Most Gouda is young, but this cheese is quite mature. It’s crafted in the traditional manner, using fresh milk from the Dutch countryside. It is allowed to ripen on untreated wooden shelves, where it is hand turned by the cheese master to ensure even flavor and consistent texture throughout each wheel. At 1000 days, it becomes a full-flavored, somewhat crumbly cheese replete with fine crystals that give it a bit of crunch.',
    brand: 'Trader Joe\'s',
    origin: 'The Netherlands',
    category: 'dutch'
  )

  cheese8 = Cheese.create!(
    name: 'Swiss Gruyère',
    description: 'One of the defining characteristics of Gruyère is its sweet, creamy, nutty flavor.
    Crafted in 70 pound wheels (for which 100 gallons of milk are used),
    Trader Joe\'s Swiss Gruyère cheese matures at the dairies for two to three months before it\'s transported to sandstone caves,
    where it rests at constant temperature (55.4ºF) and humidity (96%) for several more months to complete its affinage.
    The extended cave-aging imparts a depth flavor and richness to the cheese.',
    brand: 'Trader Joe\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese9 = Cheese.create!(
    name: 'Emmentaler',
    description: 'Made from the raw milk of cows grazing in the Alps, this is the original "Swiss" cheese (holes and all). Murray\'s selects wheels aged 12 months for balanced sweetness and sharpness and a long nutty finish. Its subtlety and meltability make it incredibly versatile. It\'s the perfect snack with fruit, the required base for fondue and an ideal sandwich topper. A knockout with Riesling.',
    brand: 'Murray\'s',
    origin: 'Switzerland',
    category: 'swiss'
  )

  cheese10 = Cheese.create!(
    name: 'Valbreso Feta',
    description: 'Made from 100% sheep’s milk in the southern region of France, Président® Valbreso Feta® has a unique creaminess. It is a delicate balance of rich tanginess that is like no other.',
    brand: 'Président',
    origin: 'France',
    category: 'goat/sheep'
  )

  cheese11 = Cheese.create!(
    name: 'Three Alarm Jack',
    description: 'This flavorful Colby and Monterey Jack mix is infused with chipotle, jalapeño and habañero peppers. It was crafted by award-winning cheesemakers at a highly sustainable artisan factory.',
    brand: 'Great Midwest',
    origin: 'USA',
    category: 'cheddar'
  )
