import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Fragment>
        {this.state.films.map(film => {
          return (
            
            <div className="row">
              <div className="col-sm-6">
                  
                <div className="card text-center ml-4" key={film.id}>
                  <h2 className="mt-1 display-4 card-title">{film.title}</h2>
                  <h5 className="text-muted">{`Released in ${film.release_date}`}</h5>

                  <Link className="card-link" to={`/films/${film.id}`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Films;
