import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as Logo from "../assets/ghiblilogoblue.png"



class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount = () => {
    this.setState({ isLoaded: true });
  };
  render() {
    if (this.state.isLoaded) {
      return (
        <div className="container shadow border-dark">
          <div className="container-lg justify-content-center align-items-center mt-5 text-light text-center">
              <img src= {Logo} className = " mb-2" alt="logo"/>
            <h1 className='' style = {{ fontSize: '30px'}}>
              Welcome to the Wonderful Worlds of Studio Ghibli
            </h1>
            <p className="" style = {{ fontSize: '20px'}} >Click a Button to Explore</p>
            <div>
              <Link className="btn btn-lg btn-outline-light mb-4" style={{marginRight: '25px'}} to="/films">
                View Films
              </Link>
              <Link className="btn btn-lg btn-outline-light mb-4" style={{marginLeft: '25px'}} to="/people">
                View People
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Nope</div>;
    }
  }
}

export default Homepage;
