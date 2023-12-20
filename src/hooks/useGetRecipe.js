import axios from 'axios';
import { useCallback, useContext } from 'react';
import { GlobalContext } from "../context/globalContext"

const fetchIdRecipe = (recipeId) => {
    let url;
    if (recipeId) {
        url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
    } else {
        url = `www.themealdb.com/api/json/v1/1/random.php`;
    }    
    return axios.get(url);
}    
const useGetRecipe = () => {
    const {state, updateState} = useContext(GlobalContext);
    const { recipe: {data, isLoading = false} = {}} = state;
    const getRecipe = useCallback(
        (recipeId)=>{
            updateState({
                isLoading: true,
            });

            return fetchIdRecipe(recipeId)
            .then((res)=>{
                const { data } = res;

                updateState({
                    weather: {
                        data,
                        isLoading: false,
                    },
                });
            })
            .catch((error) => {
                updateState({
                    weather: {
                        error,
                        isLoading: false,
                    },
                });
            })
        }, [updateState]
    );
    return {
        data, 
        getWeather, 
        isLoading
    };
}