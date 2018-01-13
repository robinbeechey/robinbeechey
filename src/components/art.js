import React, { Component } from 'react';
import {RichText} from "prismic-reactjs";


class Art extends Component {

    componentWillMount() {

    }


    render() {
        let page = this.props.content.data;

        if (process.env.NODE_ENV !== 'production') {
            console.log(page);
        }

        return (
            <div>
                <div id="art-hero" className="art-hero">
                    <div className="hero is-fullheight"
                         style={{ background: `url(${page.hero_one && page.hero_one.url}) no-repeat center`, backgroundSize: 'cover', backgroundPosition: "11% 4%"}}>

                    </div>
                    <div className="hero is-fullheight hero-two"
                         style={{ background: `url(${page.hero_two && page.hero_two.url}) no-repeat center`, backgroundSize: 'cover', backgroundPosition: "11% 4%"}}>
                    </div>
                    <div className="art-title">
                        <p className="art-title-text">{page.content && page.content[0].text}</p>
                        <h3 className="me">by Robin Beechey</h3>
                    </div>
                    <div className="circle-down-animated"></div>
                </div>
                <div id="art-showcase" className="showcase section">
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <div><h1>About Me</h1><p>asdfasdf</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Art;