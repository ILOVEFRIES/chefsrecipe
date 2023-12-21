import React, { useEffect } from 'react'
import IngredientCell from '../IngredientCell'
import RecipeCell from '../RecipeCell';
import useSearchRecipes from '../../hooks/useSearchRecipes';


const RecipePage = (props) => {
    const {data: searchData, getSearch} = useSearchRecipes();
        useEffect(() => {
            getSearch('');
        }, [])
    const CatalogRecipe = () => {
        return searchData? searchData.meals.map((meal,key) => {
            return <RecipeCell recipe={meal} key={key} changePage={(page) => props.changePage(page)}/>
        }) : null
    }
    const ingredientsNeeded = () => {
        
        const ings = [
            props.recipe.strMeasure1+' '+props.recipe.strIngredient1,
            props.recipe.strMeasure2+' '+props.recipe.strIngredient2,
            props.recipe.strMeasure3+' '+props.recipe.strIngredient3,
            props.recipe.strMeasure4+' '+props.recipe.strIngredient4,
            props.recipe.strMeasure5+' '+props.recipe.strIngredient5,
            props.recipe.strMeasure6+' '+props.recipe.strIngredient6,
            props.recipe.strMeasure7+' '+props.recipe.strIngredient7,
            props.recipe.strMeasure8+' '+props.recipe.strIngredient8,
            props.recipe.strMeasure9+' '+props.recipe.strIngredient9,
            props.recipe.strMeasure10+' '+props.recipe.strIngredient10,
            props.recipe.strMeasure11+' '+props.recipe.strIngredient11,
            props.recipe.strMeasure12+' '+props.recipe.strIngredient12,
            props.recipe.strMeasure13+' '+props.recipe.strIngredient13,
            props.recipe.strMeasure14+' '+props.recipe.strIngredient14,
            props.recipe.strMeasure15+' '+props.recipe.strIngredient15,
            props.recipe.strMeasure16+' '+props.recipe.strIngredient16,
            props.recipe.strMeasure17+' '+props.recipe.strIngredient17,
            props.recipe.strMeasure18+' '+props.recipe.strIngredient18,
            props.recipe.strMeasure19+' '+props.recipe.strIngredient19,
            props.recipe.strMeasure20+' '+props.recipe.strIngredient20,
        ];
        return ings.map((ing,key) => {
            return <div className='ingredient1' key={key}>
                        <div className='ingredientImage1'></div>
                        <h3>{ing}</h3>
                    </div>
        })
    }
    return (
        <section className='recipe'>
            <div className='recipeHero'>
                <div className='recipePageTitle'>
                    <h1>{props.recipe?.strMeal?? "-"}</h1>
                </div>
                <div className='recipeSubtitle'>
                    <h2>{props.recipe?.strCategory?? "-"}{"  "} 
             / {"  "}{props.recipe?.strArea?? "-"}e</h2>
                    <div className='flag'></div>
                </div>
            </div>
                <div className='recipeImage' 
                style={{
                    backgroundImage: `url(${props.recipe?.strMealThumb?? ""})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                
                }}></div>
                <div></div>
                <div className='ingredientsTitle'>
                    <h3>Ingredients:</h3>
                </div>
                <div className='ingredientCell'>
                    {props.recipe.strIngredient1!=null?
                    <div className='ingredient1'>
                        <div className='ingredientImage1'
                        style={{
                            background: `url(https://www.themealdb.com/images/ingredients/${props.recipe.strIngredient1}-Small.png) no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '30px',
                        }}></div>
                        <h3>{props.recipe.strIngredient1}</h3>
                    </div> : null}
                    {props.recipe.strIngredient2!=null?
                    <div className='ingredient1'>
                        <div className='ingredientImage1'
                        style={{
                            background: `url(https://www.themealdb.com/images/ingredients/${props.recipe.strIngredient2}-Small.png) no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '30px',
                        }}></div>
                        <h3>{props.recipe.strIngredient2}</h3>
                    </div> : null}
                    {props.recipe.strIngredient3!=null?
                    <div className='ingredient1'>
                        <div className='ingredientImage1'
                        style={{
                            background: `url(https://www.themealdb.com/images/ingredients/${props.recipe.strIngredient3}-Small.png) no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '30px',
                        }}></div>
                        <h3>{props.recipe.strIngredient3}</h3>
                    </div> : null}
                    {props.recipe.strIngredient4!=null?
                    <div className='ingredient1'>
                        <div className='ingredientImage1'
                        style={{
                            background: `url(https://www.themealdb.com/images/ingredients/${props.recipe.strIngredient4}-Small.png) no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '30px',
                        }}></div>
                        <h3>{props.recipe.strIngredient4}</h3>
                    </div> : null}
                    {props.recipe.strIngredient5!=null?
                    <div className='ingredient1'>
                        <div className='ingredientImage1'
                        style={{
                            background: `url(https://www.themealdb.com/images/ingredients/${props.recipe.strIngredient5}-Small.png) no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '30px',
                        }}></div>
                        <h3>{props.recipe.strIngredient5}</h3>
                    </div> : null}
                    {props.recipe.strIngredient6!=null?
                    <div className='ingredient1'>
                        <div className='ingredientImage1'
                        style={{
                            background: `url(https://www.themealdb.com/images/ingredients/${props.recipe.strIngredient6}-Small.png) no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '30px',
                        }}></div>
                        <h3>{props.recipe.strIngredient6}</h3>
                    </div> : null}
                    
                    
                </div>
            <div className='instructions'>
                <h3 className='instuctionsTitle'>Instructions:</h3>
                <div className='instructionsText'>
                    <p>
                    {props.recipe?.strInstructions?? "-"}
                    </p>
                </div>
            </div>
            <div className='otherRecipes'>
                <div className='landingRecipesOther'>
                    <h1>OTHER RECIPES</h1>
                </div>
                <CatalogRecipe/>
                </div> 
        </section>
    )
}

export default RecipePage;