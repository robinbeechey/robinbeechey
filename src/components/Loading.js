import React, { Component } from 'react';

class Loading extends Component {

    componentWillMount() {
        //this.startAnimation();

    }


    render() {

        return (
            <div ref="stripes" className="diagonal-stripes">
            </div>
        );
    }
}

export default Loading;