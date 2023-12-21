import React from 'react'

const RecipeCell = (props) => {
  return (
    <div className='recipeCell'>
      <div className='separator'/>
      <div className='recipeTitle'>
        <h2>{props.recipe?.strMeal?? "-"} </h2>
        <div className='recipeTitleTags'>
            <h3>{props.recipe?.strCategory?? "-"}{"  "} 
             / {"  "}{props.recipe?.strArea?? "-"}</h3>
            <div/>
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
