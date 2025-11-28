# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.








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
          <button onClick={fetchRecipes} className="load-btn">
            Load Recipes
          </button>
    </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {recipes.map((meals) => (
                <div key={meals} className="border rounded-lg p-3">
                  <img src={meals.strMealThumb} alt={meals.strMeal}  width=" 500px" height="600px" className="w-full h-48 object-cover rounded-md" />
                  <h3 className="mt-2 font-semibold">{meals.strMeal}</h3>
                  <h5>Category: {meals.strCategory}</h5>
                  <p>{meals.strInstructions}</p>
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
      return null;
    })}
  </ul>
)}

                
                

            <div>
           

</div>


                </div>
              ))}
            </div>
            
    </div>
 );
}

export default Recipes;
