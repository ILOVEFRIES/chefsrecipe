import React, { useEffect, useState } from 'react'
import RecipePage from './screens/RecipePage'
import { addHistory } from '../utilities/addHistory'
import { useUser } from '../context/globalContext'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";


const RecipeCell = (props) => {
  const { currentUser } = useUser();
  const userId = currentUser?.uid;
  const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);
  return (
    <div 
    style={{
      cursor:'pointer',
    }}
    onClick={async () => {
      props.changePage(<RecipePage recipe={props.recipe} changePage={(page) => props.changePage(page)}/>)
      if(authUser)await addHistory(userId,props.recipe.strMeal);
  }}
    className='recipeCell'>
      <div className='separator'/>
      <div className='recipeTitle'>
        <h2>{props.recipe?.strMeal?? "-"} </h2>
        <div className='recipeTitleTags'>
            <h3>{props.recipe?.strCategory?? "-"}{"  "} 
             / {"  "}{props.recipe?.strArea?? "-"}</h3>
           
        </div>
      </div>
      <div className='recipeBody'>
        <div 
        className='recipeBodyImage'
        style={{
            backgroundImage: `url(${props.recipe?.strMealThumb?? ""})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        
        }}/>
        <div className='rbSpace'/>
        <p>
            <span>Ingredients:</span><br/>
            1. {props.recipe?.strMeasure1?? ""} {props.recipe?.strIngredient1?? "-"}<br/>
            2. {props.recipe?.strMeasure2?? ""} {props.recipe?.strIngredient2?? "-"}<br/>
            3. {props.recipe?.strMeasure3?? ""} {props.recipe?.strIngredient3?? "-"}<br/>
            4. {props.recipe?.strMeasure4?? ""} {props.recipe?.strIngredient4?? "-"}
        </p>
      </div>
    </div>
  )
}

export default RecipeCell
