import React from 'react';
import Card from './Card';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (<div>
					<Card login="petehunt" />
        		</div>);
    }
}

export default App;