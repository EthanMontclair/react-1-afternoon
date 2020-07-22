import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }

    assignEvenAndOdds(userInput){
        let arr = userInput;
        let even = [];
        let odd = [];
        for ( let i = 0; i < arr.length; i++) {
            if( arr[i] %2 === 0) {
                even.push(arr[i]);
            } else {
                odd.push(arr[i]);
            }
        }

        this.setState({ evenArray: even, oddArray: odd})
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ (input) => this.handleChange(input.target.value) }/>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Assign </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}

export default EvenAndOdd;