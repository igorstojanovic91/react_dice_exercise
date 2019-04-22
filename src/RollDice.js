import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            dice1: 1, 
            dice2: 1
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        let num1, num2;
        num1 = Math.floor(Math.random() * 5) + 1
        num2 = Math.floor(Math.random() * 5) + 1
        this.setState({
            dice1: num1, 
            dice2: num2}) 
        }


    render() {
        return (
            <div className="RollDice">
            <div className="RollDice-Dice">
                <Die num={this.state.dice1} />
                <Die num={this.state.dice2}/>
            </div>
                <button onClick={this.roll}>Roll Dice</button>
                
            </div>
        )
    }
    
}

export default RollDice;