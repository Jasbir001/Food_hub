import { useState } from "react";
import './recipe.css'
import Header from "./Header";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

    async function fetchRecipes(){
    // const res = await fetch("www.themealdb.com/api/json/v1/1/random.php");
     const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await res.json(); 
     console.log({data})
    setRecipes(data.meals);
  }

return (
<div>
    <Header/>
      <div className="text-center p-5">
              <h2 className="recipe-title">Recipe <span>Hub</span></h2>
              <button onClick={fetchRecipes} className="load-btn"> Load Recipes </button>
        </div>
        <div className="container-fluid m-2">
              {recipes.map((meals) => (
           
                <div key={meals} className=" row border rounded-lg p-3">
                      <div className="col-4">
                        <img src={meals.strMealThumb} alt={meals.strMeal}  width="100%" height="auto" className=" object-cover rounded-md"/>
                      </div>

                      <div className="col-5">
                        <h4>Tarika</h4>
                          <p>{meals.strInstructions}</p>
                      </div>

                      <div className="col-3">
                        <h3 className="mt-2 font-semibold">{meals.strMeal}</h3>
                        <h5>Category: {meals.strCategory}</h5>
                        
                        <a href={meals.strYoutube} target="_blank">Watch on YouTube</a><br/>
                        
                        <h4>Ingredient</h4>
                        {meals && (
                    <ul>
                      {[...Array(20)].map((_, i) => {
                      const ingredient = meals[`strIngredient${i + 1}`]?.trim();
                      const measure = meals[`strMeasure${i + 1}`]?.trim();
                      
                      
                      if (ingredient) {
                      
                      return <li key={i}>{measure}      {ingredient}</li>;
                      }
                    
                    })}
                    </ul>
                    )}    
                      </div>
                </div>

              ))}


    </div>
    
</div>
)}
export default Recipes;










                {/* <div key={meals} className="border rounded-lg p-3">
                  <img src={meals.strMealThumb} alt={meals.strMeal}  width=" 500px" height="600px" className="w-full h-48 object-cover rounded-md" />
                    <h3 className="mt-2 font-semibold">{meals.strMeal}</h3>
                    <h5>Category: {meals.strCategory}</h5>
                    <p>{meals.strInstructions}</p>
                    <a href={meals.strYoutube} target="_blank">Watch on YouTube</a><br/>
                    <h4>Ingredient</h4>
                </div> */}