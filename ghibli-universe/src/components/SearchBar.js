import React, { Component } from 'react';
import './SearchBar.css';
class SearchBar extends Component {//a class based component inspite of being a display component
    constructor(props) {
        super(props);
        this.state = {
            title: `Type and filter by ${this.props.category} name over here`,//Title of the page, could be even treated as a static data

        }
    }
    inputHandler = (event) => {//triggered onChange ie whenever theuser types anything inside the input tag
        this.props.filter(event.target.value);// sending the user's input back to the Home.js and thus completing the callback loop
    }
    render() {
        return (
            <React.Fragment>
                <header id={`${this.props.category}_search`}>
                    <div>{this.state.title}</div>
                    {/* setting the title from the state */}
                    <center>
                        <input onChange={this.inputHandler} style={{
                            fontSize: '20px',
                            fontFamily: 'Times New Roman', color: '#504721',
                            border: '5px solid #504721',
                            borderRadius: '5px',
                            outline: 'none'
                        }} />
                        {/* triggering inputHandler(event) onChange*/}
                    </center>
                </header>
            </React.Fragment>
        )
    }
}
export default SearchBar;