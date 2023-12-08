// RecipeList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Select, MenuItem, Button,
  Rating as MuiRating, } from '@mui/material';
import { styled } from '@mui/system';

const FancyCard = styled(Card)({
  maxWidth: 345,
  margin: '16px',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 20px rgba(25, 118, 210, 0.5)', // Adjust the box shadow color as needed
  },
  // Add the default box shadow
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Adjust the default box shadow color as needed
});

const Media = styled(CardMedia)({
  height: 200,
  objectFit: 'cover',
});

const RecipeList = ({ recipes, setRecipes }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [cuisineFilter, setCuisineFilter] = useState('All');
  const [foodTypeFilter, setFoodTypeFilter] = useState('All');

  const handleCardClick = (id) => {
    setExpandedCard(id === expandedCard ? null : id);
  };

  const filterRecipes = (recipe) => {
    const cuisineMatch = cuisineFilter === 'All' || recipe.cuisineType === cuisineFilter;
    const foodTypeMatch = foodTypeFilter === 'All' || recipe.foodType === foodTypeFilter;
    return cuisineMatch && foodTypeMatch;
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Cuisine Filter:
            <Select
              value={cuisineFilter}
              onChange={(e) => setCuisineFilter(e.target.value)}
              style={{ marginLeft: '8px' }}
            >
              <MenuItem value="All">All</MenuItem>
              {/* Add unique cuisine types from your data */}
              <MenuItem value="Italian">Italian</MenuItem>
              <MenuItem value="Indian">Indian</MenuItem>
              <MenuItem value="Mexican">Mexican</MenuItem>
              <MenuItem value="Chienese">Chienese</MenuItem>
              {/* Add more cuisine types as needed */}
            </Select>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Food Type Filter:
            <Select
              value={foodTypeFilter}
              onChange={(e) => setFoodTypeFilter(e.target.value)}
              style={{ marginLeft: '8px' }}
            >
              <MenuItem value="All">All</MenuItem>
              {/* Add unique food types from your data */}
              <MenuItem value="Dessert">Dessert</MenuItem>
              <MenuItem value="Salad">Salad</MenuItem>
              <MenuItem value="pasta">Pasta</MenuItem>
              <MenuItem value="Main Course">Main Course</MenuItem>
              <MenuItem value="Appetizer">Appetizer</MenuItem>
              <MenuItem value="Curry">Curry</MenuItem>
              <MenuItem value="Dessert">Dessert</MenuItem>
              <MenuItem value="Roll">Roll</MenuItem>
              {/* Add more food types as needed */}
            </Select>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          filterRecipes(recipe) && (
            <Grid item key={recipe.id} xs={12} sm={6} md={4}>
              <FancyCard
                onClick={() => handleCardClick(recipe.id)}
                style={{ transform: recipe.id === expandedCard ? 'scale(1.05)' : 'scale(1)' }}
              >
                <Media
                  image={recipe.image} // Use the recipe-specific image
                  title={recipe.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {recipe.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                        Cuisine Type: {recipe.cuisineType}
                      </Typography>
                  {recipe.id === expandedCard && (
                    <React.Fragment>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Ingredients: {recipe.ingredients.join(', ')}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" component="p">
                        Type of Food: {recipe.foodType}
                      </Typography>

                      
                    </React.Fragment>
                  )}
                  <Link to={`/recipe/${recipe.id}`}>See details</Link>
                </CardContent>
              </FancyCard>
            </Grid>
          )
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default RecipeList;
