import React from 'react'
import './Guy.css'
import nameIcon from './icons/014-name.svg'

export default class Guy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunger: 0,
            sleep: 0
        }
    }

    buttonsView() {
        if(this.props.currentUser)
        {
            return <div>
                    <button className="guy-button">Feed</button><button className="guy-button">Sleep</button>
                </div>
        }

        return <div></div>
    }   

    render() {
        return <div className="guyView">
            <div className="guy-title"><img className="guy-icon" src={nameIcon} />{this.props.name}</div>
            <div><b>Hunger: </b>{this.state.hunger}</div>
            <div><b>Sleep: </b>{this.state.sleep}</div>
            <div className="guy-buttons">{this.buttonsView()}</div>
        </div>
    }
}