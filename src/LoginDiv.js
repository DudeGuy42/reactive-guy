import React from 'react'
import './LoginDiv.css'
import loginIcon from './icons/004-enter.svg'
import logoutIcon from './icons/012-logout.svg'
import userIcon from './icons/017-user.svg'
export default class LoginDiv extends React.Component {

    constructor(props) {
        super(props);
        // this.props.onLogin
        // this.props.guyList
        
        this.state = {
            loggedIn: false,
            guyName: ""
        }

        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.setState({
            guyName:"",
            loggedIn: false
        });
        
        this.props.onLogout();
    }

    submit(submitEvent) {
        submitEvent.preventDefault();
        
        this.setState({
            loggedIn: true
        });
        
        this.props.onLogin(this.state.guyName)
    }

    change(changeEvent) {
        this.setState({
            guyName: changeEvent.target.value
        });
    }

    view() {
        if(this.state.loggedIn)
        {
            return <div id="status-controls-block">
                    <div id="login-block">
                        <div id="login-block-icon-div">
                            <img src={userIcon} id="login-icon" />
                        </div>
                        <div id="login-block-form-div">
                            <b>Hey {this.state.guyName}!</b>
                        </div>
                    </div>
                    <div id="logout-block">
                        <button onClick={this.logout}><img src={logoutIcon} id="logout-icon" /></button>
                    </div>
            </div> 
        }

        return <div id="login-block">
                    <div id="login-block-icon-div">
                        <img src={loginIcon} id="login-icon" />
                    </div>
                    <div id="login-block-form-div">
                        <form id="login-form" onSubmit={this.submit}>
                            <label id="input-guy-label">Guy Name: </label> 
                            <input id="input-guy-value" type="text" value={this.state.guyName} onChange={this.change}></input>
                        </form>
                    </div>
                </div>

    }

    render() {
        return this.view();
    }

}