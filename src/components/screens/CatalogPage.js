import React, { useEffect, useState } from 'react'
import RecipeCell from '../RecipeCell'
import useSearchRecipes from '../../hooks/useSearchRecipes';
import useSearchIngredients from '../../hooks/useSearchIngredients';
import IngredientCell from '../IngredientCell';

const CatalogPage = (props) => {
    const {data: searchData, getSearch} = useSearchRecipes();
    const {data: searchIng, getIngSearch} = useSearchIngredients();
    const [currPage, setCurrPage] = useState(<div/>);
    const [pageIndex, setPageIndex] = useState(0);

    

    // useEffect(() => {
    //     console.log(props.search);
    // });
    useEffect(() => {
        getIngSearch();
        getSearch('');
    }, [])
    useEffect(()=> {
        if(searchData)setCurrPage(<CatalogRecipe/>);
    }, [searchData])
    useEffect(()=> {
        getSearch(props.search? props.search : '');
        console.log(props.search);
    }, [props.search])
    const CatalogRecipe = () => {
        return searchData.meals? searchData.meals.map((meal,key) => {
            return <RecipeCell recipe={meal} key={key} changePage={(page) => props.changePage(page)}/>
        }) : null
    }
    const CatalogIngredient = () => {
        console.log(searchIng);

        return searchIng? searchIng.meals.slice(0, 25).map((meal,key) => {
            return <IngredientCell ingredient={meal} key={key}/>
        }) : null
    }
    const setCatalog = (e, page) => {
        setCurrPage(page);
        setPageIndex(e);
    }
  return (
    <section className='catalog'>
        <h1>
            <p 
            style= {{textDecorationLine: pageIndex===0?'underline':''}}
            onClick={() => {setCatalog(0,<CatalogRecipe/>)}}>RECIPES</p>
            |
            <p
            style= {{textDecorationLine: pageIndex===1?'underline':''}}
             onClick={() => {setCatalog(1,<CatalogIngredient/>)}}>INGREDIENTS</p>
            </h1>

        <div className='catalogFlex'>
            {currPage}
        </div>
      
    </section>
  )
}

export default CatalogPage
