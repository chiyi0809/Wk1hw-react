import { getProducts } from "../api"
import {useQuery} from "@tanstack/react-query"

export const useProducts=()=>{
    const{data,isLoading}=useQuery([],getProducts)
    return{data,isLoading};
};