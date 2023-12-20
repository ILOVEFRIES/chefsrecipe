import React from 'react'

const RecipeCell = (props) => {
  return (
    <div className='recipeCell'>
      <div className='separator'/>
      <div className='recipeTitle'>
        <h2>Strawberries Romanoff</h2>
        <div className='recipeTitleTags'>
            <h3>Rice / Japanese</h3>
            <div/>
        </div>
      </div>
      <div className='recipeBody'>
        <div className='recipeBodyImage'/>
        <div className='rbSpace'/>
        <p>
            <span>Ingredients:</span><br/>
            1. 50 lbs Lamb<br/>
            2. 5 tablespoon Prune<br/>
            3. 1 litre Lemon Juice<br/>
            4. Butter
        </p>
      </div>
    </div>
  )
}

export default RecipeCell
