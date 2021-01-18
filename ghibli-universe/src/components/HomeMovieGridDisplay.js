import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeMovieGridDisplay = (props) => {
    const display = (filmslist) => {
        if (filmslist) {
            if(filmslist.length === 0){
                return (
                    <div id="movie_first" className='no_result_container'>
                        <br/>
                        <div className="overlay">
                        Sorry; no matches found.
                            <a className="text" href='#movie_search'><div className="text">Search<img alt='searchbar_icon' src="https://img.icons8.com/fluent/96/000000/search-bar.png"/></div></a>
                        </div>
                    </div>
                )
            }
            return filmslist.map((item,index) => {
                const movieRoute ='/films/'+item.id+ '#top';
                if(index === 0){
                    return (
                        <div id="movie_first" className='movie_poster_container'>
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.title}</center>
                            <div className="overlay">
                                <a className="text" href='#movie_search'><div className="text">Search<img alt='searchbar' src="https://img.icons8.com/fluent/48/000000/search-bar.png"/></div></a>
                            </div>
                        </div>
                    )
                }
                else{
                    return (
                        <div className='movie_poster_container'>
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.title}</center>
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