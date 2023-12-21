import React from 'react'

const IngredientCell = (props) => {
  return (
    <div className='ingredientCell'>
        <div className='ingredient1'>
            <div className='ingredientImage1'></div>
            <h3>50 lb Lamb</h3>
        </div>
        <div className='ingredient2'>
            <div className='ingredientImage2'></div>
            <h3>5 tablespoon Prun</h3>
        </div>
        <div className='ingredient1'>
            <div className='ingredientImage3'></div>
            <h3>1 litre Lemon juice</h3>
        </div>
    </div>
  )
}

export default IngredientCell
