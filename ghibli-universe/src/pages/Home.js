import React,{Component} from 'react';
import HomeMovieGridDisplay from '../components/HomeMovieGridDisplay';
import HomeCharacterGridDisplay from '../components/HomeCharacterGridDisplay';
import HomeLocationGridDisplay from '../components/HomeLocationGridDisplay';
import HomeTopDisplay from '../components/HomeTopDisplay';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import Logout from './Logout';
const filmsUrl = 'http://localhost:8900/films';
const characters_url= 'http://localhost:8900/characters';
const locations_url= 'http://localhost:8900/locations';
class Home extends Component{
    constructor(){
      super()
      this.state={
          films: '',
          films_filtered: '',
          characters: '',
          characters_filtered: '',
          locations: '',
          locations_filtered: '',
      }
    }
    changeHandler = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering=this.state.films.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.title.toLowerCase().indexOf(input.toLowerCase())>-1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({films_filtered:filtering});//changing state's value
    }
    changeHandler2 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering=this.state.characters.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase())>-1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({characters_filtered:filtering});//changing state's value
    }
    changeHandler3 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering=this.state.locations.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase())>-1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({locations_filtered:filtering});//changing state's value
    }
    render(){
      return(
        <>
              <HomeTopDisplay filmslist={this.state.films_filtered}/>
              <SearchBar category='movie' filter={(input) => {this.changeHandler(input)}} /> 
              <HomeMovieGridDisplay  filmslist={this.state.films_filtered}/>
              <SearchBar category='character' filter={(input) => {this.changeHandler2(input)}} /> 
              <HomeCharacterGridDisplay characterslist={this.state.characters_filtered}/>
              <SearchBar category='location' filter={(input) => {this.changeHandler3(input)}} />
              <HomeLocationGridDisplay locationslist={this.state.locations_filtered}/>
              <Logout history={this.props.history}/>
        </>    
      )
    }
    componentDidMount(){
      axios.get(filmsUrl)
      .then((response)=>{
          //console.log(response.data);
          this.setState({films:response.data})
          this.setState({films_filtered:response.data})
      })
      axios.get(characters_url)
      .then((response)=>{
          //console.log(response.data);
          this.setState({characters:response.data})
          this.setState({characters_filtered:response.data})
      })
      axios.get(locations_url)
      .then((response)=>{
          //console.log(response.data);
          this.setState({locations:response.data})
          this.setState({locations_filtered:response.data})
      })
    }
}

export default Home;