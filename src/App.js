
import { useEffect, useState } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([]);

  //function to search the recipt from the ApI

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  }

  //Fetch all recipes when no query is provided
  useEffect(() => {
    if (!query) {
      searchRecipes()
    }
  }, [query]); //Trigger when `query` changes

  const handleSubmit = event => {
    event.preventDefault()
    searchRecipes()
  }

  return (
    <div className="container">
      <h2>Our Recipe App</h2>
      <SearchBar
        value={query}
        isLoading={isLoading}
        handleSubmit={handleSubmit} 
        onChange={event => setQuery(event.target.value)}/>
      <div className='recipes'>
        { recipes ? recipes.map(recipe => (
          <RecipeCard
          key={recipe.idMeal}
          recipe={recipe} />
        )) : "No Recipes!"}
      </div>
    
    </div>
  );
}

export default App;
