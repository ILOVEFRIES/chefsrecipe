import React from 'react'
import IngredientCell from '../IngredientCell'
import RecipeCell from '../RecipeCell';
import '../../recipe.css'; 

const RecipePage = (props) => {

    return (
        <section className='recipe'>
            <div className='recipeHero'>
                <div className='recipePageTitle'>
                    <h1>Strawberries Romanoff</h1>
                </div>
                <div className='recipeSubtitle'>
                    <h2>Rice / Japanese</h2>
                    <div className='flag'></div>
                </div>
            </div>
                <div className='recipeImage'></div>
                <div></div>
                <div className='ingredientsTitle'>
                    <h3>Ingredients:</h3>
                </div>
                <IngredientCell/>
            <div className='instructions'>
                <h3 className='instuctionsTitle'>Instructions:</h3>
                <div className='instructionsText'>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Porta elit eget ultrices neque auctor sagittis orci purus. Risus egestas enim vel imperdiet ante risus semper mi. Ullamcorper enim massa rhoncus adipiscing viverra. Viverra ut a blandit amet sed amet. Elit at sapien adipiscing cursus platea vitae viverra. Non fermentum suscipit fringilla purus. Sed malesuada amet erat eget elit mauris at feugiat. Eget ullamcorper bibendum convallis viverra aliquam justo viverra imperdiet odio.
                    </p>
                </div>
            </div>
            <div className='otherRecipes'>
                <div className='landingRecipesOther'>
                    <h1>OTHER RECIPES</h1>
                </div>
                    <RecipeCell/>
                </div> 
        </section>
    )
}

export default RecipePage;