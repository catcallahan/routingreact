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
        <div className="container-fluid mt-2">
          <div className="row justify-content-center">
            {this.state.films.map(film => {
              return (
                <div className="card col-4 m-2" key={film.id}>
                  <div
                    className="card-body border-dark text-center m-3"
                    
                  >
                    <h2 className="mt-2 mb-2 card-title">{film.title}</h2>
                    <h5 className="text-muted">{`Released in ${film.release_date}`}</h5>

                    <Link className="card-link" to={`/films/${film.id}`}>
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Films;
