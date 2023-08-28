import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const seacrhApi = async(searchTerm) => {
       const response = await yelp.get('/search',{
            params:{
                limit:50,
                term: searchTerm,
                location:'İstanbul'
            }
        });
        setResults(response.data.businesses);
    }
    useEffect(() => {
        seacrhApi('Toast')
    },[]);

    return [seacrhApi,results];
}