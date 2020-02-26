import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Homepage extends Component {
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
        <div className="container">
          <div className="container-lg justify-content-center align-items-center border shadow-sm mt-5 bg-light border border-primary text-center">
            <h1 className='display-3'>
              Let's Learn About All the Wonderful Worlds of Studio Ghibli!
            </h1>
            <p>Click a Button to Explore</p>
            <div className="justify-content-around">
              <Link className="btn btn-lg btn-outline-primary mb-2" to="/films">
                View Films
              </Link>
              <Link className="btn btn-lg btn-outline-primary mb-2" to="/people">
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
