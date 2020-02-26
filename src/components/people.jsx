import React, { Component } from 'react'

export class People extends Component {
    constructor(props){
        super(props)

        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(people => this.setState({ people }))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
            {this.state.people.map(peeps => {
              return ( 
              <div key = {peeps.id}>
              <h1>{peeps.name}</h1>
              </div>
              )
            })}
            </div>
        )
    }
}


export default People
