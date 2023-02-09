import React from 'react';
import recipe from './recipe.json'
import './Home.css'



function Card ({recipe}){
    return (
      <div className="card">
      <h1>{recipe.Recipetitle}</h1>
      <p>Time to cook {recipe.Cookingtime} Min</p>
      <p>{recipe.Recipedesc}</p>
      <button>Cook this</button>
    </div>
  
    );
  
  }
  
  function Home() {
      return(
          <div className="show-list">
              {recipe.map((recipe) =>(
                  <Card key={recipe.id} recipe={recipe} />
              ))}
          </div>
      );
  }
  
  export default Home;