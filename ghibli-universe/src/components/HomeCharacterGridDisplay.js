import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeCharacterGridDisplay = (props) => {
    const display = (characterslist) => {
        if (characterslist) {
            if(characterslist.length === 0){
                return (
                    <div id="character_first" className='no_result_container'>
                       
                        <br/>
                        <div className="overlay">
                        Sorry; no matches found.
                            <a className="text" href='#character_search'><div className="text">Search<img alt='searchbar_icon' src="https://img.icons8.com/fluent/96/000000/search-bar.png"/></div></a>
                        </div>
                    </div>
                )
            }
            return characterslist.map((item,index) => {
                const movieRoute ='/characters/'+item.id +'#top';
                if(index === 0){
                    return (
                        <div id="character_first" className='movie_poster_container'>
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.name}</center>
                        
                            <a className="text" href='#character_search'>Search<img alt='searchbar' src="https://img.icons8.com/fluent/48/000000/search-bar.png"/></a>
                            
                        </div>
                    )
                }
                else{
                    return (
                        <div className='movie_poster_container'>
    
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.name}</center>
                        </div>
                    )
                }
                
            })
        }
    }
    
    return (
        <>  
            <div className="container" >
                <center>
                    <h2 className='CategoryHeading'>Characters</h2>
                </center>

                <div className="movie_grid" id='grid'>
                    {display(props.characterslist)}
                </div>
            </div>
        </>
    )
}

export default HomeCharacterGridDisplay;