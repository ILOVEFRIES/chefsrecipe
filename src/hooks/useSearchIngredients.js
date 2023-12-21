import axios from 'axios';
import { useCallback, useContext } from 'react';
import { GlobalContext } from "../context/globalContext"

const fetchIngredients = () => {
    const uri = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    return axios.get(uri);
}    
const useSearchIngredients = () => {
    const {state, updateState} = useContext(GlobalContext);
    const { ingredient: {data, isLoading = false} = {}} = state;
    const getIngSearch = useCallback(
        ()=>{
            updateState({
                isLoading: true,
            });

            return fetchIngredients()
            .then((res)=>{
                const { data } = res;

                updateState({
                    ingredient: {
                        data,
                        isLoading: false,
                    },
                });
            })
            .catch((error) => {
                updateState({
                    ingredient: {
                        error,
                        isLoading: false,
                    },
                });
            })
        }, [updateState]
    );
    return {
        data, 
        getIngSearch, 
        isLoading
    };
};
export default useSearchIngredients;