import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';

const HomeMovieGridDisplay = (props) => {
    const display = (filmslist) => {
        if (filmslist) {
            return filmslist.map((item) => {
                const movieRoute ='/films/'+item.id;
                return (
                    <>

                        <div className='movie_poster_container'><Link to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /><center>{item.title}</center></Link></div>
                    </>
                )
            })
        }
    }
    
    return (
        <>  
            <div className="container" >
                <center>
                    <h2 className='CategoryHeading'>Movies</h2>
                </center>

                <div className="movie_grid" id='grid'>
                    {display(props.filmslist)}
                </div>
            </div>
        </>
    )
}

export default HomeMovieGridDisplay;