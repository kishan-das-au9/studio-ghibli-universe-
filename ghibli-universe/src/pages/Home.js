import React,{Component} from 'react';
import HomeMovieGridDisplay from '../components/HomeMovieGridDisplay';
import HomeCharacterGridDisplay from '../components/HomeCharacterGridDisplay';
import HomeLocationGridDisplay from '../components/HomeLocationGridDisplay';
import HomeSpeciesGridDisplay from '../components/HomeSpeciesDisplay';
import HomeVehiclesGridDisplay from '../components/HomeVehiclesDisplay'
import HomeTopDisplay from '../components/HomeTopDisplay';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import Logout from './Logout';
const filmsUrl = 'https://studio-ghibli-universe-api.herokuapp.com/films';
const characters_url= 'https://studio-ghibli-universe-api.herokuapp.com/characters';
const locations_url= 'https://studio-ghibli-universe-api.herokuapp.com/locations';
const species_url= 'https://studio-ghibli-universe-api.herokuapp.com/species';
const vehicles_url= 'https://studio-ghibli-universe-api.herokuapp.com/vehicles';
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
          species: '',
          species_filtered: '',
          vehicles: '',
          vehicles_filtered: ''
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
    changeHandler4 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering=this.state.species.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase())>-1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({species_filtered:filtering});//changing state's value
    }
    changeHandler5 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering=this.state.vehicles.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase())>-1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({vehicles_filtered:filtering});//changing state's value
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
              <SearchBar category='species' filter={(input) => {this.changeHandler4(input)}} />
              <HomeSpeciesGridDisplay specieslist={this.state.species_filtered}/>
              <SearchBar category='vehicle' filter={(input) => {this.changeHandler5(input)}} />
              <HomeVehiclesGridDisplay vehicleslist={this.state.vehicles_filtered}/>
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
      axios.get(species_url)
      .then((response)=>{
          //console.log(response.data);
          this.setState({species:response.data})
          this.setState({species_filtered:response.data})
      })
      axios.get(vehicles_url)
      .then((response)=>{
          //console.log(response.data);
          this.setState({vehicles:response.data})
          this.setState({vehicles_filtered:response.data})
      })
    }
}
export default Home;