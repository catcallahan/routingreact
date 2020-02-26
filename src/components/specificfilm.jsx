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
      <div className = "card">
        <h1 className="display-3 card-title">{this.state.film.title}</h1>
    <p className='card-body'>{this.state.film.description}</p>
      </div>
    );
  }
}

export default SpecificFilm;
