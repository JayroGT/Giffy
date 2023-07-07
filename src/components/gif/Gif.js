import React from 'react';
import {Link} from "wouter";
import './Gif.css';

export default function Gif( {title,id,url} ){
return (
    <div class="card">
    <Link to={`/gif/${id}`}
    className='Gif'>
        <img class="card-image" src={url} alt={title} />
        <div class="category"> Illustration </div>
        <div class="heading"> {title}
        <div class="author"> gif id : <span class="name">{id}</span> UwU </div>
        </div>
    </Link>
    </div>
)
}