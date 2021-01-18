import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {//a class based component inspite of being a display component
    constructor(props) {
        super(props);
        this.state = {
            title: `Type and filter by ${this.props.category} name over here:`,//Title of the page, could be even treated as a static data

        }
    }
    inputHandler = (event) => {//triggered onChange ie whenever theuser types anything inside the input tag
        this.props.filter(event.target.value);// sending the user's input back to the Home.js and thus completing the callback loop
    }
    render() {
        return (
            <React.Fragment>
                <header id={`${this.props.category}_search`}>
                    <div className='container'>
                        <div>{this.state.title}</div>
                        {/* setting the title from the state */}
                   
                        <input onChange={this.inputHandler} style={{
                            fontSize: '20px',
                            fontFamily: 'Times New Roman', color: '#504721',
                            border: 'none',
                            backgroundColor: '#ffe5b2',
                            borderRadius: '5px',
                            outline: 'none',
                            padding: '5px',
                            margin: '0px'
                        }} />
                        <img alt='search' src="https://img.icons8.com/fluent/96/000000/search-bar.png"/>
                        {/* triggering inputHandler(event) onChange*/}
                   
                    </div>
                    
                </header>
            </React.Fragment>
        )
    }
}
export default SearchBar;