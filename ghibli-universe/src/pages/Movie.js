import React, { Component } from 'react';

import axios from 'axios';
import Logout from './Logout';
import MoviePage from '../components/MoviePage';
import VideoComponent from '../components/VideoComponent'
const filmsUrl = 'http://localhost:8900/films';


class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
      id: this.props.match.params.id
    }
  }

  async getMovieDetails() {
    const { data: resp } = await axios.get(`${filmsUrl}/${this.props.match.params.id}`)
    this.setState({ movie: resp })
  }
  render() {
    console.log(this.state,'inside render')
    return (
      <>
        <MoviePage moviedetails={this.state.movie} />
  
        <Logout history={this.props.history} />
      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getMovieDetails()
  }

}

export default Movie;