import React from 'react';
import autobind from 'autobind-decorator';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Card';
        this.state = {};
    }

    componentDidMount() {
    	var _this = this;
    	$.get("https://api.github.com/users/petehunt", function(data){
    		console.log(data.name);
    		_this.setState({
            FirstName: data.name
		        });
		        console.info(_this.state.FirstName);
    	});
    }

    render() {
        return (<div>
        			<img src="" width="80"/>
        			<h3>{this.state.FirstName}</h3>
        			<hr />
                </div>);
    }
}

export default Card;
