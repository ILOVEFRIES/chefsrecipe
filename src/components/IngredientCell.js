import React from 'react'

const IngredientCell = (props) => {
  return (
    <div className='recipeCell'>
      <div className='separator'/>
      <div className='recipeTitle'>
        <h2>{props.ingredient?.strIngredient?? "-"} </h2>
      </div>
      <div className='recipeBody'>
        <div className='recipeBodyImage'
        style={{
          
            background: `url(https://www.themealdb.com/images/ingredients/${props.ingredient.strIngredient}-Small.png`,
            // ${props.ingredient?.strIngredient?? "Chicken"}-Small.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '30px',
        }}
        />
        <div className='rbSpace'/>
        <p>
            <span>Description:</span><br/>
            {props.ingredient?.strDescription?? "-"}
        </p>
      </div>
    </div>
  )
}

export default IngredientCell;
