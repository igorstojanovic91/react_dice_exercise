import React, { Component } from 'react'
import './Die.css'
class Die extends Component {
    static defaultProps = {
        diceValues : [1,2,3,4,5,6]
    }
    render() {
        let translator = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: "four",
            5: 'five',
            6: 'six'
        }
        let classNumber = `fas fa-dice-${translator[this.props.num]} fa-6x`
        console.log(classNumber)
        return (
            <div className="Die">
                <i className={classNumber}></i>
            </div>
        )
    }
}

export default Die