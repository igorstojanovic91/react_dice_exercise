import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            dice1: 1, 
            dice2: 1,
            rolling: false
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        this.setState({
            dice1: Math.floor(Math.random() * 5) + 1, 
            dice2: Math.floor(Math.random() * 5) + 1,
            rolling: true
            })    
        setTimeout(function() {
            this.setState({rolling: false})
        }.bind(this), 1000)
        }

        
    render() {
        let button;
        this.state.rolling 
            ? button =  <button className="RollDice-rolling" onClick={this.roll} disabled>Rolling...</button>
            : button = <button onClick={this.roll}>Roll Dice</button>

        return (
            <div className="RollDice">
            <div className="RollDice-Dice">
                <Die num={this.state.dice1} rolling ={this.state.rolling}/>
                <Die num={this.state.dice2} rolling ={this.state.rolling}/>
            </div>
                {button}
            </div>
        )
    }
    
}

export default RollDice;