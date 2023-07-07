import React, {useState, useEffect} from "react";
import {Link, useLocation} from "wouter";
import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/listOfList";
import {useGifs} from "../../hooks/useGifs";


const POPULAR_GIFS = ["ferrari", "peru", "gatos"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs();
    
    const handleSubmit = evt=>{
        evt.preventDefault()  
        pushLocation(`/search/${keyword}`)
        
    }

    const handleChange = evt=>{
        setKeyword(evt.target.value) 
    }

 return (
    <>
        <form onSubmit={handleSubmit}>
            <input placeholder="mande!!" onChange={handleChange} type="text" value={keyword} />
        </form>
        <h3>Ahora en tendencias!!</h3>
        <ul>
            {POPULAR_GIFS.map((popularGif)=> (
                    <li key={popularGif}>
                        <Link to={ `/search/${popularGif}` }> Gif de {popularGif}</Link>
                    </li>
            ))}
        </ul>
        <h3 className="App-title" >Ultimo visto</h3> 
        <ListOfGifs gifs= {gifs} />   
        
        
    </>
 )
}