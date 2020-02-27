import React, { Component } from "react";

export class SpecificFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {}
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(film => this.setState({ film }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid" key ={this.state.film.id}>
        <div className="card">
          <h1 className="display-3 card-title ml-3 mt-4">
            {this.state.film.title}
          </h1>
          <p className="text-muted ml-3">{`Director: ${this.state.film.director}`}</p>
          <p className="card-body">{this.state.film.description}</p>
        </div>
      </div>
    );
  }
}

export default SpecificFilm;
