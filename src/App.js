import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import RecipeList from './components/recipelist';
import RecipeDetail from './components/recipedetail';
import NavBar from './components/navbar';
import Footer from './components/footer';
import LandingPage from './modules/LandingPage';
import NavigationBar from './components/actionnavbar';
import About from './components/about'
import healthyPastaImage from './assets/Healthy_pasta.jpg'; // Updated import statement
import tortillaSoupImage from './assets/tortilla_soup.jpg';
import tiramisuImage from './assets/tiramisu.jpg';
import stuffPastaImage from './assets/stuff_pasta.jpg';
import shrimpImage from './assets/shriump.jpg';
import quinoaSaladImage from './assets/quinoa_salad.jpg';
import pizzaImage from './assets/pizza.png';
import kathiRollImage from './assets/kathi_roll.jpg';
import curryImage from './assets/curry.jpg';
import cookieImage from './assets/cookie.webp';
import chickenImage from './assets/chicken.jpg';
import bruschettaImage from './assets/brushetta.jpg';




const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Healthy Pasta Salad',
      description: 'A light and refreshing salad with a medley of vegetables and whole wheat pasta.',
      ingredients: ['Whole wheat pasta', 'Cherry tomatoes', 'Cucumber', 'Bell peppers', 'Olive oil', 'Salt', 'Pepper'],
      cuisineType: 'Italian',
      foodType: 'Salad',
      steps: [
        'Roll out pizza dough on a floured surface to your desired thickness.',
        'Spread a layer of tomato sauce over the dough.',
        'Top with mozzarella cheese, bell peppers, onions, olives, and mushrooms.',
        'Bake in a preheated oven until the crust is golden and the cheese is melted and bubbly.',
      ],
      image: healthyPastaImage,  // Use the imported image variable
    },
    {
      id: 2,
      title: 'Spicy Grilled Chicken',
      description: 'Tender chicken marinated in a blend of spices and grilled to perfection.',
      ingredients: ['Chicken thighs', 'Paprika', 'Cayenne pepper', 'Garlic powder', 'Olive oil', 'Lemon', 'Salt', 'Pepper'],
      cuisineType: 'American',
      foodType: 'Main Course',
      steps: [
        'Roll out pizza dough on a floured surface to your desired thickness.',
        'Spread a layer of tomato sauce over the dough.',
        'Top with mozzarella cheese, bell peppers, onions, olives, and mushrooms.',
        'Bake in a preheated oven until the crust is golden and the cheese is melted and bubbly.'
      
      ],
      image: chickenImage,
    },
    {
      id: 3,
      title: 'Vegetarian Pizza',
      description: 'A delicious pizza topped with fresh vegetables and melted cheese.',
      ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella cheese', 'Bell peppers', 'Onions', 'Olives', 'Mushrooms'],
      cuisineType: 'Italian',
      foodType: 'Pizza',
      steps: [
        'Roll out pizza dough on a floured surface to your desired thickness.',
        'Spread a layer of tomato sauce over the dough.',
        'Top with mozzarella cheese, bell peppers, onions, olives, and mushrooms.',
        'Bake in a preheated oven until the crust is golden and the cheese is melted and bubbly.'
      
      ],
      image: pizzaImage,
    },
   {
    id: 4,
    title: 'Stuff Pasta',
    description: 'Perfectly cooked shells brimming with a rich blend of creamy ricotta and aromatic spices. A simple yet sensational dish that guarantees to elevate your pasta night.',
    ingredients: ['Ricotta Cheese', 'Sour Cream', 'Yogurt', 'Parmesan Cheese','White American cheese','Green Chili','salt','Green Onion' , 'Parsley','Garlic Paste', 'Pasta Sauce'],
    cuisineType: 'Italian',
    foodType: 'Pasta',
    steps: [
      'Boil pasta shells until al dente; set aside',
      'In a mixing bowl, combine the ricotta cheese, sour cream, yogurt, grated Parmesan cheese (if using), shredded white American cheese, diced green chili, salt, green onion, Parsley, and garlic paste.', 
      '. Preheat oven to 350°F. Heat red sauce, then pour over stuffed shells in a baking dish. Bake covered for 20-25 mins.',
      'Garnish with parsley or Parmesan. Serve hot and enjoy!',
    
    ],
    image: stuffPastaImage,
   },
    // Add more recipes as needed
    {
      id: 5,
      title: 'Mexican Quinoa Salad',
      description: 'Elevate your mealtime with our Insta Pot Quinoa Avocado Salad. Packed with vibrant veggies, beans, and a hint of green chili, this refreshing dish is a delightful blend of flavors and healthiness!',
      ingredients: ['Quinoa', 'Avocado', 'Tomatoes', 'Onion','Cilantro','Corn','Black Beans','Salt' , 'Green Chilli'],
      cuisineType: 'Mexican',
      foodType: 'Salad',
      steps: [
        'Rinse the quinoa thoroughly under cold water.  Add the rinsed quinoa and cook it for 5-8 mins in Insta pot.',
        'In a large salad bowl, combine the cooked quinoa, diced avocado, tomatoes, chopped onion, parsley, corn kernels, and black beans, green chili. Toss gently to mix the ingredients evenly.',
        'And your salad is ready to serve!', 
      
      ],
      image: quinoaSaladImage,
     },

     {
      id: 6,
      title: 'Paneer Kathi Roll',
      description: 'Experience the delightful flavors of Paneer Kathi Roll, a perfect amalgamation of spiced paneer filling, crisp vegetables, and zesty chutney wrapped in a soft roti.',
      ingredients: [
        '4 Onions',
        '7-8 Garlic cloves',
        '8-10 Cashews',
        '3-4 Dry red chillies',
        '3 Medium-size tomatoes',
        'Cumin seeds',
        'Oil',
        'Red chilli powder',
        'Turmeric powder',
        'Kitchen king masala',
        'Coriander-cumin powder',
        'Half tsp sugar',
        'Paneer',
        'Capsicum',
        'Water',
        'Kasturi methi',
        'Mint-coriander chutney',
        'Mayonnaise',
        'Ketchup',
        'Raw onions',
        'Bell pepper',
        'Chaat masala',
        'Roti (Indian flatbread)',
      ],
      cuisineType: 'Indian',
      foodType: 'Roll',
      steps: [
        'Heat oil in a pan, add cumin seeds, garlic, red chillies, and cashews; sauté for 2 minutes.',
        'Add onions and sauté for 10-15 minutes until golden in color. Add tomatoes and cook well.',
        'Let the stuffing cool down and grind it well.',
        'Heat oil in a pan, add red chilli powder, turmeric powder, then add the puree. Sauté until oil is separated.',
        'Add kitchen king masala, coriander-cumin powder, and half tsp sugar.',
        'Add paneer, capsicum, water; cook for 10 minutes. Add kasturi methi.',
        'Prepare mint-coriander chutney, add mayonnaise, and mix well.',
        'Spread ketchup on a roti, cook it from both sides. Now spread paneer stuffing, onions, bell pepper, chutney mix, chaat masala, and roll it.',
        'Savor the exquisite taste of your delightful Kathi Roll!',
      
      ],
      image: kathiRollImage,
      
     },
     {
      id: 7,
      title: 'Corn Tortilla Soup:',
      description: 'A flavorful blend of boiled tomatoes, caramelized onions, corn, and cottage cheese, simmered to perfection, served with tortillas.',
      ingredients: [
        '7 tomatoes',
        '1 onion',
        'Corn',
        'Cottage Cheese',
        'Tortillas',
      ],
      cuisineType: 'Soup',
      foodType: 'Appetizer',
      steps: [
        'Boil tomatoes and grind them in a mixer.',
        'In a large pot, heat a tablespoon of oil over medium heat.',
        'Add the chopped onion and sauté until it becomes translucent and slightly caramelized.',
        'Add corn.',
        'Bring the mixture to a boil, then reduce the heat to low and let it simmer for about 15-20 minutes to allow the flavors to meld together.',
        'Return the blended soup to the pot and stir in the cottage cheese.',
      
      ],
      image: tortillaSoupImage,
     },
     {
id: 8,
title: 'Tomato Basil Bruschetta',
description: 'A delightful appetizer featuring sliced Italian bread topped with a garlic-infused butter, melted Parmesan, and a fresh tomato-basil mixture. Simple, flavorful, and perfect for any gathering!',
ingredients: [
  '1 loaf of Italian bread, sliced',
  '3 tbsp butter, melted',
  '1 clove garlic, minced',
  'Italian seasoning',
  'Parmesan cheese',
  '6 roma tomatoes, diced',
  '2 cloves garlic, minced',
  '1 tbsp olive oil',
  '1 tsp salt',
  '1/4 tsp pepper',
  '4 fresh basil leaves, finely chopped',
],
cuisineType: 'Italian',
foodType: 'Appetizer',
steps: [
  'Preheat oven to 350°F (180°C).',
  'In the microwave, melt 3 tbsp of butter with 1 clove of crushed garlic.',
  'Slice the Italian bread to about 1-inch thickness and top with melted garlic butter, Italian seasoning, and Parmesan cheese.',
  'Bake for approximately 15 minutes or until golden brown.',
  'In a mixing bowl, combine diced tomatoes, minced garlic, salt, pepper, basil, and olive oil.',
  'Top the garlic bread with the desired amount of tomato mixture.',
  'Garnish with Parmesan cheese.',
  'Enjoy!',
  
],
image: bruschettaImage,

     },
     {
      id: 9,
title: 'Spicy Chickpea Curry',
description: 'A flavorful and aromatic chickpea curry with a blend of spices and herbs, creating a delightful dish thats both hearty and satisfying.',
ingredients: 
  [
    '1 onion, chopped',
  '1 tomato, chopped',
  '1 (1 inch) piece fresh ginger, peeled and chopped',
  '4 cloves garlic, chopped, or more to taste',
  '1 green chile pepper, seeded and chopped (optional)',
  '3 tablespoons olive oil',
  '2 fresh bay leaves',
  '1 teaspoon chili powder',
  '1 teaspoon coriander powder',
  '1 teaspoon garam masala',
  '½ teaspoon turmeric powder',
  '1 pinch salt to taste',
  'Water as needed',
  '1 (15 ounce) can chickpeas',
  '1 teaspoon fresh cilantro leaves, for garnish, or more to taste',
  ],
cuisineType: 'Indian',
foodType: 'Curry',
steps: [
  'Grind onion, tomato, ginger, garlic, and chile pepper together in a food processor into a paste.',
  'Heat olive oil in a large skillet over medium heat. Fry bay leaves until fragrant, about 30 seconds.',
  'Pour the paste into the skillet and cook until the oil begins to separate and is golden brown, 2 to 3 minutes.',
  'Season the mixture with chili powder, coriander, garam masala, turmeric, and salt; cook and stir until very hot, 2 to 3 minutes.',
  'Stir enough water into the mixture to get a thick gravy; bring to a boil and stir chickpeas into the gravy.',
  'Reduce heat to medium and cook until the chickpeas are heated through, 5 to 7 minutes.',
  'Garnish with cilantro.',
  
],
image: curryImage,

     },
     {
      id: 10,
title: 'Shrimp with Broccoli in Garlic Sauce',
description: 'A savory dish featuring tender shrimp, crisp broccoli, and a flavorful garlic sauce.',
ingredients: [
  '2 cups fresh broccoli florets',
  '1 tablespoon water',
  '2 tablespoons peanut oil',
  '4 large cloves garlic, minced',
  '1 cup low-sodium chicken broth',
  '1 tablespoon soy sauce',
  '1 tablespoon oyster sauce',
  '2 teaspoons grated fresh ginger root',
  '1 pound uncooked medium shrimp, peeled and deveined',
  '¼ cup canned water chestnuts, drained',
  '2 tablespoons cornstarch',
],
cuisineType: 'Chienese',
foodType: 'Main Course',
steps: [
  'Combine broccoli and water in a glass bowl; steam in the microwave oven until slightly tender, 2 to 3 minutes.',
  'Heat peanut oil in a large skillet or wok over medium-high heat. Add garlic and cook until fragrant, about 1 minute. Reduce heat to low.',
  'Add chicken broth, soy sauce, oyster sauce, and ginger root to the garlic; bring to a boil.',
  'Add shrimp; cook and stir until the shrimp turn pink, 3 to 4 minutes.',
  'Toss steamed broccoli and water chestnuts with shrimp mixture to coat with sauce.',
  'Stir cornstarch into the mixture, 1 tablespoon at a time, until the sauce thickens, about 5 minutes.',
 
],
image: shrimpImage,

     },
     {
      id: 11,
title: 'Chocolate Tiramisu',
description: 'Indulge in the rich layers of this delectable Chocolate Tiramisu, featuring espresso-soaked ladyfingers, mascarpone cream, and a luscious chocolate ganache.',
ingredients: [
  'Ganache:',
  '180g heavy cream (3/4 cup)',
  '160g dark or semi-sweet chocolate',
  'Mascarpone Cream:',
  '2 1/2 cups heavy whipping cream, chilled (600g)',
  '1/2 cup granulated sugar (110g)',
  '1/2 tsp vanilla',
  '8 to 12 ounces good-quality mascarpone cheese (slightly cooler than room temperature)',
  'Assembly:',
  '30-35 ladyfingers',
  '1 1/2 cups espresso (or strong coffee)',
  '1 tbsp cocoa powder, + more for dusting',
  
],
cuisineType: 'Dessert',
foodType: 'Dessert',
steps: [
  'Ganache: Bring the heavy cream to a boil, then pour over the chocolate. Cover for 5 minutes, then stir until a smooth ganache forms.',
  'Mascarpone Cream: Whisk chilled heavy cream, sugar, and vanilla until thick. Add mascarpone cheese gradually, mixing on low speed until combined.',
  'Assembly: Mix cocoa powder with cooled espresso. Dip ladyfingers into the espresso, arrange in a 9x9" pan. Cover with half of the mascarpone cream and ganache. Repeat for another layer.',
  'Chill: Cover and refrigerate the Chocolate Tiramisu for at least 4 hours, ideally overnight.',
  'Serve: Dust with cocoa powder right before serving.',
],
image: tiramisuImage,
 },
     
  {
    id: 12,
    title: 'Eggless Brownie Cookies',
    description: 'Satisfy your sweet cravings with these delightful Eggless Brownie Cookies, featuring a perfect blend of dark chocolate, butter, and a hint of cocoa powder.',
    ingredients: [
      '50g [3 tbsp] milk',
      '7g [½ tbsp] white vinegar',
      '110g [¾ cup] dark chocolate',
      '30g [2 tbsp] butter',
      '75g [¼ cup + 2 tbsp] brown sugar',
      '80g [½ cup + 3 tbsp] all-purpose flour',
      '7g [1 tbsp] cocoa powder',
      '2.5g [¾ tsp] baking powder',
    ],
    cuisineType: 'Dessert',
    foodType: 'Dessert',
    steps: [
      'Preheat the oven to 350°F (180°C).',
      'Mix milk and vinegar in a bowl; set aside for 3-4 mins.',
      'Melt dark chocolate and butter in the microwave for 30 sec.',
      'In a separate bowl, combine brown sugar, milk-vinegar mixture, and dark chocolate-butter mixture; mix well.',
      'Add cocoa powder, baking powder, and all-purpose flour; mix until well combined. Chill the batter for 10 mins.',
      'Drop spoonfuls of dough onto a prepared baking sheet, leaving space between each cookie.',
      'Bake for 10-12 mins or until edges are set and centers are slightly soft.',
      'Cool on the baking sheet for 5 mins, then transfer to a wire rack to cool completely.',
      'Serve and enjoy your delicious eggless brownie cookies!',
      
    ],
    image: cookieImage,
    
  },

  ]);
  
  return (
    <Router>
      <div>
        <NavBar />
        <NavigationBar/>
        <Container maxWidth="lg" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <Routes>
          <Route path="/" element={<LandingPage />} /> {/* LandingPage as the default route */}
            <Route path="/recipe" element={<RecipeList recipes={recipes} />} />
            <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
