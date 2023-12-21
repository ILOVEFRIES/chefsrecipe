import React, { useEffect } from 'react'
import RecipeCell from '../RecipeCell'
import useGetRecipe from '../../hooks/useGetRecipe';
import CatalogPage from './CatalogPage';

const LandingPage = (props) => {
    const {data: recipeData, getRecipe} = useGetRecipe();
    useEffect(() => {
        console.log("sent request for 52772")
        getRecipe('52772');
        console.log(recipeData);
    }, [])

  return (
    
    <section className='landing'>
        <div className='landingHero'>
            <h1>WELCOME TO</h1>
            <div className='landingSubhero'>
                <h2>CHEF'S<br/>RECIPE</h2>
                <div></div>
                <h3>
                    The biggest collection of foods and recipes!<br/>
                    Find what you want to make and get detailed instructions on how to make them!
                </h3>
            </div>
        </div>
        <div className='landingRecipes'>
            <h1 id='landingRecipesTitle'>RECIPE OF THE DAY</h1>
            {recipeData? <RecipeCell recipe={recipeData.meals[0]} changePage={(page) => props.changePage(page)}/> : null}
            <div className='separator'></div>
            <div 
            style={{cursor: 'pointer',}}
            onClick={() => props.changePage(<CatalogPage changePage={(page) => props.changePage(page)}/>)}
            className='landingRecipesOther' >
                <h1>OTHER RECIPES</h1>
            </div>
            <div className='separator'></div>
        </div>
    </section>
  )
}

export default LandingPage
