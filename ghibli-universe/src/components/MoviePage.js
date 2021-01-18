import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import VideoComponent from './VideoComponent'
import BottomCarousel from './BottomCarousel'
import { HashLink } from 'react-router-hash-link';


const MoviePage = (props) => {
    console.log(props, "props passed")



    const movie_info = ({ moviedetails }) => {
        if (moviedetails) {


            return (
                <>
                    <div className='backgroundWall' style={{ backgroundImage: `url(${moviedetails.back_wall})` }} ></div>
                    <VideoComponent video={moviedetails.trailer_url} />


                    <div className='container'>

                        <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#716944' }}>
                            <div className="col-xs-5 col-sm-6 col-lg-3">
                                <div ><img className='movie_banner' src={moviedetails.image_url} alt='movie_poster' style={{ border: '3px solid #716944 ' }}></img><br />
                                    <div style={{ textAlign: 'left' }}>{moviedetails.title}</div>
                                </div>

                            </div>

                            <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
                                <p>Directed by <b>{moviedetails.director} </b></p>
                                <hr style={{ backgroundColor: '#2b250f', height: '0.01px' }}></hr>
                                <div> {moviedetails.description}</div>
                                <br />
                                <small>
                                    Year of Production : <b> {moviedetails.release_date} </b>
                                Rotten Tomatoes score : <b> {moviedetails.rt_score} </b> <br />
                                Producer : <b> {moviedetails.producer} </b>
                                </small>

                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    const character_tile = (moviedetails) => {
        if (moviedetails) {
            return moviedetails.char.map((item) => {
                const characterRoute = '/characters/' + item.id + '#top';
                return (
                    <>
                        <div className='movie_p_c'><HashLink to={characterRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img><br /><center>{item.name}</center></HashLink></div>





                    </>
                )
            })
        }
    }
    const merch = (moviedetails) => {
        if (moviedetails) {
            return moviedetails.video_buy.map((item) => {
                return (
                    <>
                        <div className="card mb-3 card movie_p_c" style={{ maxWidth: '370px', backgroundColor: '#716944' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.image_url} className="card-img" alt="product_image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small>{item.name}</small></p>
                                        <a href={item.merch_link} className="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }

    const collectables = (moviedetails) => {
        if (moviedetails) {
            return moviedetails.merch_buy.map((item) => {
                return (
                    <>
                        <div className="card mb-3 card movie_p_c" style={{ maxWidth: '370px', backgroundColor: '#716944' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.image_url} className="card-img" alt="product_image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small><b>{item.name}</b></small></p>
                                        <a href={item.merch_link} className="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }


    return (
        <>
            <div>{movie_info(props)}</div>

            <div style={{ margin: '10px' }}>

                <a href="#movie _page_character" ><h5>characters</h5></a >

                <a href="#officialprdct"><h5>official products</h5></a >

                <a href="#collectables"><h5>collectables</h5></a >



                <a href="#"><h5>vehicles</h5></a >

                <a href="#"><h5>species</h5></a >

                <a href="#"><h5>locations</h5></a >


            </div>

            <div className="chatacter_tile" id='movie _page_character'>
                <h4 style={{ marginLeft: '20px' }}>Characters</h4>
                <hr style={{ backgroundColor: '#2b250f', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {character_tile(props.moviedetails)}
            </div>


            <div className="video_links" id="officialprdct" style={{ marginTop: '20px', paddingBottom: '30px', backgroundColor: '#2b250f' }}>
                <h4 style={{ backgroundColor: '#2b250f', color: '#cccdb4', padding: '30px 0px 0px 20px' }}>Official Products</h4>
                <hr style={{ backgroundColor: '#cccdb4', height: '1px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {merch(props.moviedetails)}
            </div>

            <div className="video_links" id="collectables" style={{ paddingBottom: '30px', backgroundColor: '#2b250f' }}>
                <h4 style={{ backgroundColor: '#2b250f', color: '#cccdb4', padding: '30px 0px 0px 20px' }}>Collectables</h4>
                <hr style={{ backgroundColor: '#cccdb4', height: '1px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {collectables(props.moviedetails)}
            </div>

            <BottomCarousel />



        </>
    )
}

export default MoviePage;