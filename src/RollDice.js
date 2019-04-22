import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {  
    render() {
        return (
            <div className="RollDice">
            <div className="RollDice-Dice">
                <Die />
                <Die />
            </div>
                <button>Roll Dice</button>
                
            </div>
        )
    }
    
}

export default RollDice;