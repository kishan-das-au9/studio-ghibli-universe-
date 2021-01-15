import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';

const HomeLocationGridDisplay = (props) => {
    const display = (locationslist) => {
        if (locationslist) {
            return locationslist.map((item) => {
                const movieRoute ='/locationslist/'+item.id;
                return (
                    <>

                        <div className='movie_poster_container'><Link to={movieRoute}><img className='movie_poster' src={item.image_url[0]} alt='movie_poster'></img><br /><center>{item.name}</center></Link></div>
                    </>
                )
            })
        }
    }
    
    return (
        <>  
            <div className="container" >
                <center>
                    <h2 className='CategoryHeading'>Locations</h2>
                </center>

                <div className="movie_grid" id='grid'>
                    {display(props.locationslist)}
                </div>
            </div>
        </>
    )
}

export default HomeLocationGridDisplay;