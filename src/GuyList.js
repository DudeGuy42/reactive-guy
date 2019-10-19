import React from 'react'
import './GuyList.css'
import Guy from './Guy'

export default class GuyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.currentUser);
        const guysMap = this.props.guyList.map((value) => 
            <Guy key={value} name={value} currentUser={this.props.currentUser == value}></Guy>
        );

        return <div className="guyGrid">{guysMap}</div>
    }

}