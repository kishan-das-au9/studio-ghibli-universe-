import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MoviePage.css';
import Slider from "react-slick";
import VideoComponent from './VideoComponent'
import ReactPlayer from 'react-player'

var settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
};


const MoviePage = (props) => {

    const helper =(moviedetails) => {
        if (moviedetails){
            return moviedetails.char.map((item) => {
                const characterRoute ='/characters/'+item.id;
                return (
                    <>
                        <div className='movie_p_c'><Link to={characterRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img><br /><center>{item.name}</center></Link></div>
                    </>
                )
            })    
        }
    }

    const display = ({ moviedetails }) => {
        if (moviedetails) {
            // let character = moviedetails.character_name.map(character => <div>{character}</div>)
            // let character_img = moviedetails.character_image.map(character_img => <div>{character_img}</div>)
            

            return (
                <>
                    <div className='backgroundWall' style={{ width: '100%', height: 550, backgroundImage: `url(${moviedetails.back_wall})` }} ></div>
                    {/* <img className='movie_banner' src={moviedetails.back_wall} alt='movie_poster' style={{ border: '3px solid #716944 ' }}></img> */}
                    {/* <VideoComponent  video={moviedetails.trailer_url} /> */}
                    <VideoComponent video={moviedetails.trailer_url} />


                    <div className='container'>

                        <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#716944' }}>
                            <div className="col-xs-5 col-sm-6 col-lg-3">
                                <div ><img className='movie_banner' src={moviedetails.image_url} alt='movie_poster' style={{ border: '3px solid #716944 ' }}></img><br />
                                    <div style={{ textAlign: 'left' }}>{moviedetails.title}</div>
                                </div>

                            </div>

                            <div class="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
                                <p>Directed by <b>{moviedetails.director} </b></p>
                                <hr style={{ backgroundColor: '#2b250f', height: '0.01px' }}></hr>
                                <div> {moviedetails.description}</div>
                                <br></br>
                                <small>Year of Production : <b>{moviedetails.release_date}  </b> Rotten Tomatoes : <b>{moviedetails.rt_score}</b></small>

                            </div>
                        </div>


                    </div>
                    {/* <div > 
                        

                       <h4 style={{ marginLeft: '20px' }}>Characters</h4>
                        <hr style={{ backgroundColor: '#2b250f', height: '2px' }}></hr>
                        <div ><img className='movie_character' style={{ border: '3px solid #716944 ' }} src={character_img} alt='movie_poster'></img><br /><>{moviedetails.character_name}</></div> 

                    </div>  */}


                </>
            )
        }
    }
    return (
        <>
        <div>{display(props)}</div>
        <h4 style={{ marginLeft: '20px' }}>Characters</h4>
        <hr style={{ backgroundColor: '#2b250f', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>        
        <div>{helper(props.moviedetails)}</div>
        </>

    )
    // const slick = (moviedetails) => {
    //     if (moviedetails) {
    //         return moviedetails.map((item) => {
    //             return (
    //                 <>
    //                     <div class='slide' style={{ width: '100%', height: 1100, backgroundImage: `url(${item.image_url})` }} >
    //                         <h3 id="HomeSlide1">{item.title}</h3>
    //                         <br />
    //                         <h4 id="HomeSlide2">Slide to go to the next movie image</h4>
    //                         <br />
    //                         <div style={{textAlign:'left'}}>

    //                         </div>
    //                         <div style={{textAlign: 'right'}}>
    //                         <div id='HomeLog' style={{display:'inline-block'}} >
    //                             <img  id="HomeImage3" src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png' alt='logo' />
    //                             <p>Studio Ghibli Universe</p>
    //                         </div>
    //                     </div></div>
    //                 </>
    //             )
    //         })
    //     }
    // }
    // return (
    //     <>
    //         <center>
    //             <Slider {...settings}>
    //                 {slick(props.moviedetails)}
    //             </Slider>
    //         </center>
    //         <div className='HomeDescription'>
    //             <center>
    //                 <h2>Studio Ghibli Universe</h2>
    //                 <p>
    //                     One of the most acclaimed studios in the world, Studio Ghibli is the home of some of the most revered and beloved animated works to have ever graced the screen.
    //                 </p>
    //                 <br />
    //                 <p>
    //                     The Studio Ghibli catalogue is now available to buy along with all it's merchandise of characters, vehicles, species and locations. Click on your favourite tag below to order.
    //                 </p>
    //             </center>
    //         </div>
    //         <br/>

    //         <div className="container">
    //             <center><h2 className='CategoryHeading'>Movies</h2></center>
    //             <div className="movie_grid">
    //                 {display(props.moviedetails)}
    //             </div>
    //         </div>
    //         <VideoComponent />
    //     </>
    // )


}

export default MoviePage;