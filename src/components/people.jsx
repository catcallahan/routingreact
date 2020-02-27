import React, { Component } from "react";
import { Fragment } from "react";

export class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(people => this.setState({ people }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Fragment>
        <div className="conatiner-fluid mt-2">
          <div className="row justify-content-center">
            {this.state.people.map(peeps => {
              return (
                <div className="card col-3 m-2" key={peeps.id}>
                  <div className=" card-body border-dark text-center m-3">
                    <h3 className="mt-2 mb-2 card-title">{peeps.name}</h3>
                    <p className="text-muted">{`${peeps.age} ${peeps.gender}`}</p>
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

export default People;
