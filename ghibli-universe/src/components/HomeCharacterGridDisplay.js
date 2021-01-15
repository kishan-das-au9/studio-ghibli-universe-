import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';

const HomeCharacterGridDisplay = (props) => {
    const display = (characterslist) => {
        if (characterslist) {
            return characterslist.map((item) => {
                const movieRoute ='/characters/'+item.id;
                return (
                    <>

                        <div className='movie_poster_container'><Link to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /><center>{item.name}</center></Link></div>
                    </>
                )
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