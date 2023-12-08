import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Rating } from "@mui/material";


import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Rating as MuiRating,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paper: {
    padding: "40px",
    marginBottom: "40px",
  },
  title: {
    marginBottom: "8px",
  },
  subtitle: {
    marginBottom: "20px",
    marginTop: "8px",
  },
  listTitle: {
    marginBottom: "4px",
    fontWeight: "bold",
  },
  media: {
    height: 500, // Set the desired height
    width: 400,  // Set the desired width
    objectFit: 'cover', // Maintain aspect ratio and cover the entire container
  },
  ratingContainer: {
    marginBottom: "20px",
    width: "350px",
    height: "500px",
    padding: "20px",
    border: "10px solid #e0e0e0",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  ratingText: {
    marginBottom: "8px",
  },
  submitButton: {
    marginTop: "20px",
    padding: "16px",
    width: "150px",
    height: "40px",
  },
  successMessage: {
    marginTop: "16px",
    padding: "16px",
    border: "1px solid #4caf50",
    borderRadius: "8px",
    backgroundColor: "#e8f5e9",
  },
  commentContainer: {
    marginTop: "16px",
  },
  commentsList: {
    marginTop: "16px",
  },
});

const RecipeDetail = ({ recipes }) => {
  const classes = useStyles();
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  const initialRating = parseInt(localStorage.getItem(`rating_${id}`)) || 0;
  const [userRating, setUserRating] = useState(initialRating);
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);

  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    localStorage.setItem(`rating_${id}`, userRating.toString());
  }, [id, userRating]);

  const handleRatingChange = (event) => {
    setUserRating(event.target.value);
  };

  const handleSubmit = () => {
    const userId = 2; // Replace with the actual user ID
    axios.post("/ratings", {
      recipeId: id,
      userId: userId,
      rating: userRating,
    }).then(
      (response) => {
        console.log(response);
        setIsRatingSubmitted(true);
      },
      (error) => {
        console.log(error);
      }
    );

    if (comment) {
      axios.post("/comments", {
        RecipeId: id,
        userId: userId,
        Comments: comment,
      }).then(
        (response) => {
          console.log(response);
          setCommentsList([...commentsList, { userId, comment }]);
          setComment('');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };


  return (
    <Paper className={classes.paper} elevation={3}>
      {recipe && (
        <div>
          <Typography variant="h4" className={classes.title} gutterBottom>
            {recipe.title}
          </Typography>

          <CardMedia
            className={classes.media}
            image={recipe.image} // Use the recipe-specific image
            title={recipe.title}
          />

          <Typography variant="body1" className={classes.subtitle} gutterBottom>
            {recipe.description}
          </Typography>

          <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
            Cuisine Type: {recipe.cuisineType}
          </Typography>

          <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
            Food Type: {recipe.foodType}
          </Typography>

          <Typography variant="h6" className={classes.listTitle} gutterBottom>
            Ingredients:
          </Typography>

          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" className={classes.listTitle} gutterBottom>
            Steps:
          </Typography>

          <List>
            {recipe.steps.map((step, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${index + 1}. ${step}`} />
              </ListItem>
            ))}
          </List>

          <Box className={classes.ratingContainer}>
            <Typography variant="h6" className={classes.ratingText} gutterBottom>
              Rating:
            </Typography>
            {isRatingSubmitted ? (
  <Rating
    name="submitted-rating"
    value={userRating}
    precision={0.5}
    readOnly
  />
) : 
(<Rating
    name="user-rating"
    value={userRating}
    onChange={(event, newValue) => setUserRating(newValue)}
    precision={0.5}
  />
)}

            
            {/* Comment Section */}
            
            <Typography variant="h6" style={{ marginBottom: "10px" }}>
  Comments</Typography>
            <Box className={classes.commentContainer}>
              <TextField
                id="outlined-multiline-static"
                label="Your Comment"
                multiline
                rows={4}
                variant="outlined"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                fullWidth
                style={{ marginBottom: "16px"}}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.submitButton}
                style={{ width: "150px", marginBottom: "10px"}}
              >
                Submit 
              </Button>
            </Box>
            {isRatingSubmitted && (
  <Box className={classes.successMessage}>
    <Typography variant="body1" color="success">
      Your rating: 
    </Typography>
    <Rating name="read-only" value={userRating} readOnly />

    <Box className={classes.commentsList}>
              {commentsList.map((item, index) => (
                <Typography key={index} variant="body1" gutterBottom>
                  User {item.userId}: {item.comment}
                </Typography>
              ))}
            </Box>
              </Box>
              
            )}
            

            
          </Box>
        </div>
      )}
    </Paper>
  );
};

export default RecipeDetail;
