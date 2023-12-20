import React from 'react'

const LandingPage = () => {
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
            <div className='separator'></div>
            <div className='landingRecipesOther'>
                <h1>OTHER RECIPES</h1>
            </div>
            <div className='separator'></div>
        </div>
    </section>
  )
}

export default LandingPage
