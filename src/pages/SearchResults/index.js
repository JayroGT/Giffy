import React from "react";
import Spinner from "../../components/spinner"
import ListOfGifs from "../../components/listOfList/";
import { useGifs } from '../../hooks/useGifs';



function SearchResults( {params} ){
    const {keyword} = params;
    const {loading, gifs} = useGifs({ keyword })

 return <>
    {loading
        ?<Spinner />
        : <ListOfGifs gifs={gifs} />
    }
    </> 
}

export default React.memo(SearchResults)