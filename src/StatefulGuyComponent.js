import React from 'react';
import './StatefulGuyComponent.css'

function ErrorComponent(props) {
    return <div><p id="error-component">An Error Has Occurred!</p> </div>    
}

function AllGoodComponent(props) {
    return <div><p id="nominal-component">Things Are Looking Nominal.</p></div>
}

// stateless component?
function StatelessGuyComponent(props) {
    return <div>
        <h1>Hello Stateless World!</h1> 
    </div>
}

// stateful component

class StatefulGuyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inError: false,
            tick: 0
        }

        // this is necessary because, in JavaScript, class methods are not bound by default. Weird.
        this.doSomethingMildlyInteresting = this.doSomethingMildlyInteresting.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(), 
            1000);

    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        // this form of SetState uses the *previous state* to increment.
        // this is because this.state and this.props are updated asynchronously
        // and so their values can not be directly relied upon. 

        // Basically -- never touch state or props directly, use the setState method.
        this.setState((state, props) => ({
            tick: state.tick + 1
        }));
    }

    status() {
        if(this.state.inError)
        {
            return <ErrorComponent></ErrorComponent>
        }

        return <AllGoodComponent></AllGoodComponent>
    }
    
    doSomethingMildlyInteresting() {
        console.log("invoked something mildly interesting...");
        this.setState((state, props) => ({
            inError: !state.inError
        }));
    }

    render() {
        const numbers = [2, 4, 6, 8, 10]
        const listItems = numbers.map((number) => 
            <li key={number.toString()}>{number}</li>
        );

        return <div>
            <button onClick={this.doSomethingMildlyInteresting}>Do Something Mildly Interesting</button>
            <h2>{this.state.tick}</h2>
            {this.status()}
            <ul>{listItems}</ul>
        </div>
    }
}

export default StatefulGuyComponent;