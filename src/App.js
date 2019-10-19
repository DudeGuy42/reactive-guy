import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginDiv from './LoginDiv'
import GuyList from './GuyList'

class App extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      loggedInAs: "",
      guys: [ "Threepwood", "Zuckerberg", "Gates", "Ballmer", "Allen", "Musk" ]
    }
    
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.setState({
      loggedInAs: ""
    })
  }

  onLogin(name) {
    this.setState((state, props) => ({
      loggedInAs: name,
      guys: state.guys.concat(name)
    }));
  }

  render() {
    return <div className="App">
      <header>
        <h1>GuySim&trade;</h1>
      </header>

      <div id="app-segments">
        <div>
          <LoginDiv onLogin={this.onLogin} onLogout={this.onLogout} guyList={this.state.guys}></LoginDiv>
        </div>
        <div>
          <GuyList guyList={this.state.guys} currentUser={this.state.loggedInAs}></GuyList>
        </div>
      </div>
    </div>
  }
}

export default App;
