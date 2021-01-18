import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "#716944" }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

            <HashLink className="nav-link" id="home-link" to="/home#top">Home<span className="sr-only">(current)</span></HashLink>
          </li>
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/home#movie_first"
            //   activeClassName="selected"
            //   activeStyle={{ color: 'red' }}
            // // etc...
            >Films
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/home#character_first"
            //   activeClassName="selected"
            //   activeStyle={{ color: 'red' }}
            // // etc...
            >Characters
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/home#location_first"
            //   activeClassName="selected"
            //   activeStyle={{ color: 'red' }}
            // // etc...
            >Locations
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/home#species_first"
            //   activeClassName="selected"
            //   activeStyle={{ color: 'red' }}
            // // etc...
            >Species
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>
          <li className="nav-item nav-item active" >
            <HashLink className="nav-link" id="home-link" 
              to="/home#vehicles_first"
            //   activeClassName="selected"
            //   activeStyle={{ color: 'red' }}
            // // etc...
            >Vehicles
            <span className="sr-only">(current)</span>
            </HashLink>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </Link>
            <div className="dropdown-menu" id="menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="#">Action</Link>
              <Link className="dropdown-item" href="#">Another action</Link>
              <Link className="dropdown-item" href="#">Something else here</Link>
            </div>
          </li>

        </ul>

        <Link><img src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png" width="100" height="50" id="header-image" className="d-inline-block align-bottom" alt="" loading="lazy" /></Link>

      </div>
    </nav>
  )
}

export default Header;