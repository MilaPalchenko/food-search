# Simple recipe search

Made using [spoonacular api](https://spoonacular.com/food-api).
Gives you recipes based on the: 
- ingredients (complex and simple recipes);
- cuisine.

In the `Search.jsx` and `FoodDetail.jsx` find `API_KEY` and replace `PUT_YOUR_API_KEY_HERE` with the one you've gotten from the [spoonacular](https://spoonacular.com/food-api).

In the `Search.jsx` file there are 3 blocks with *fetchFood()* function. Each of them has slightly changed url for different search purposes using spoonacular. 
- First: cuisine search; 
- Second: complex recipes based on the input ingredients; 
- Third(picked right now): search based on as few additional ingredients as possible.
Comment out or remove **two** out of **three** of those functions for code to run correctly.