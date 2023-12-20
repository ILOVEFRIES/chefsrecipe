import axios from 'axios';
import { useCallback, useContext } from 'react';
import { GlobalContext } from "../context/globalContext"

const fetchRecipes = (searchTerm) => {
    let url;
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    return axios.get(url);
}    
const useGetRecipe = () => {
    const {state, updateState} = useContext(GlobalContext);
    const { recipe: {data, isLoading = false} = {}} = state;
    const getRecipe = useCallback(
        (searchTerm)=>{
            updateState({
                isLoading: true,
            });

            return fetchRecipes(searchTerm)
            .then((res)=>{
                const { data } = res;

                updateState({
                    recipe: {
                        data,
                        isLoading: false,
                    },
                });
            })
            .catch((error) => {
                updateState({
                    recipe: {
                        error,
                        isLoading: false,
                    },
                });
            })
        }, [updateState]
    );
    return {
        data, 
        getRecipe, 
        isLoading
    };
}