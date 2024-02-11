export const sample_foods = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
    desc : 'A mouthwatering pizza topped with zesty tomato sauce, gooey mozzarella cheese, and generous slices of savory pepperoni, baked to perfection on a crispy crust, delivering a bold and irresistible flavor experience.' ,
  },
  {
    id: '2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 5,
    imageUrl: 'food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
    desc : 'Juicy, tender spheres of seasoned ground meat, often a blend of beef and onion, rolled into perfect portions and simmered in a rich tomato sauce until flavorful and fragrant, offering a comforting and hearty addition to pasta dishes or sandwiches.',
  },
  {
    id: '3',
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
    desc : 'A classic American favorite, featuring a juicy beef patty grilled to perfection and nestled between two soft sesame seed buns, layered with crisp lettuce, ripe tomatoes, onions, pickles, and a dollop of tangy ketchup or mustard, offering a satisfyingly savory and iconic taste.'
  },
  {
    id: '4',
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3,
    imageUrl: 'food-4.jpg',
    tags: ['FastFood', 'Fry'],
    desc : 'Crispy and golden slices of potatoes, fried to perfection in hot oil until irresistibly crunchy on the outside and tender on the inside, sprinkled with salt or your favorite seasonings for a deliciously addictive side dish or snack.' ,
  },
  {
    id: '5',
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.5,
    imageUrl: 'food-5.jpg',
    tags: ['SlowFood', 'Soup'],
    desc : 'A comforting and nourishing broth-based soup filled with tender pieces of chicken, hearty vegetables like carrots, celery, and onions, and fragrant herbs, simmered to perfection to create a warm and soothing bowl of wholesome goodness, perfect for a chilly day or when under the weather.' ,
  },
  {
    id: '6',
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
    desc : 'A delectable pizza topped with vibrant and fresh vegetables such as bell peppers, mushrooms, onions, tomatoes, and olives, layered on a bed of tangy tomato sauce and melted mozzarella cheese, offering a flavorful and satisfying option for vegetarians and pizza lovers alike.' ,
  },
  {
    id: '7',
    name: 'Fried mushrooms',
    price: 4,
    cookTime: '15-20',
    favorite: true,
    origins: ['us'],
    stars: 4.0,
    imageUrl: 'food-7.jpg',
    tags: ['FastFood', 'Fry'],
    desc : 'These delectable fungi are typically coated in a light batter or breadcrumbs, fried until golden and crispy, and served as a delightful appetizer or side dish, offering a savory and earthy flavor with each bite.' ,
  },
  {
    id: '8',
    name: 'Kebab',
    price: 20,
    cookTime: '40-50',
    favorite: false,
    origins: ['persia'],
    stars: 4.5,
    imageUrl: 'food-8.jpg',
    tags: ['Lunch', 'SlowFood'],
    desc : 'Persian kebab, a cherished culinary tradition, features tender pieces of marinated meat, such as lamb, chicken, or beef, skewered and grilled to perfection over an open flame. Infused with aromatic spices and herbs, these succulent kebabs offer a delightful blend of flavors and are often served with fragrant saffron rice and grilled vegetables, making for a truly satisfying and aromatic meal.' ,
  },
  {
    id: '9',
    name: 'Vegetable pilaf with fish',
    price: 15,
    cookTime: '40-50',
    favorite: false,
    origins: ['middle east' , 'south asia' , 'Mediterranean'],
    stars: 5.0,
    imageUrl: 'food-9.jpg',
    tags: ['Lunch', 'SlowFood'],
    desc : 'This flavorful dish combines fluffy rice cooked with an array of vegetables like carrots, peas, and bell peppers, paired with tender pieces of fish, such as salmon or cod, seasoned with aromatic spices and herbs. The result is a harmonious fusion of textures and flavors, creating a wholesome and satisfying meal that is both nutritious and delicious.' ,
  },
  {
    id: '10',
    name: 'spaghetti',
    price: 10,
    cookTime: '30-40',
    favorite: true,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'food-10.jpg',
    tags: ['Lunch', 'SlowFood'],
    desc : 'Spaghetti, a beloved Italian pasta, is long, thin noodles made from durum wheat semolina, cooked to al dente perfection. Often paired with rich tomato sauce, garlic, olive oil, and Parmesan cheese, spaghetti offers a classic and comforting dining experience, perfect for satisfying pasta cravings. Its versatility allows for endless variations, from simple marinara to indulgent carbonara, making it a staple dish in kitchens worldwide.' ,
  },
  {
    id: '11',
    name: 'Cheeseburger',
    price: 11,
    cookTime: '20-30',
    favorite: false,
    origins: ['us'],
    stars: 3.5,
    imageUrl: 'food-11.jpg',
    tags: ['FastFood', 'Hamburger'],
    desc : 'A classic cheeseburger features a juicy beef patty, typically grilled to perfection, topped with a slice of melted cheese, crisp lettuce, ripe tomatoes, onions, pickles, and a creamy special sauce, all sandwiched between a soft sesame seed bun. This iconic American dish offers a delightful combination of savory flavors and textures, making it a timeless favorite for burger enthusiasts worldwide.' ,
  },
];

export const sample_tags = [
  { name: 'All', count: 11 },
  { name: 'FastFood', count: 6 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 6 },
  { name: 'SlowFood', count: 5 },
  { name: 'Hamburger', count: 2 },
  { name: 'Fry', count: 2 },
  { name: 'Soup', count: 1 },
];

export const sample_users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '12345',
    address: 'Toronto On',
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    password: '12345',
    address: 'Shanghai',
    isAdmin: true,
  },
];
