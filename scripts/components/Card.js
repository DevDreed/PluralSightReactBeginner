import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return <div>App</div>;
    }
}

React.render(<App/>, document.getElementById("root"));
