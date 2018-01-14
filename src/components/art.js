import React, { Component } from 'react';
import {RichText} from "prismic-reactjs";
import Layout from "./_layout";
import HireMe from './HireMe';

const Scroller = ({projects}) => {
    return (
        <div className="columns is-variable is-6">
            {
                projects.map((project, index)=> {
                    return (
                        <div className="column is-three-fifths is-offset-one-fifth" key={index}>

                            <div className="showcase">
                                <img src={project.image && project.image.url}/>
                                <div className="little-line"></div>
                            </div>

                            <div className="showcase-info">
                                <p className="person">{project.name && project.name[0].text}</p>
                                <p>{project.description && project.description[0].text}</p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
};




class Art extends Component {

    componentWillMount() {

    }


    render() {
        let page = this.props.content.data;

        if (process.env.NODE_ENV !== 'production') {
            console.log(page);
        }

        return (
            <Layout>
                <div id="art-hero" className="art-hero">
                    <div className="hero is-fullheight"
                         style={{ background: `url(${page.hero_one && page.hero_one.url}) no-repeat center`, backgroundSize: 'cover', backgroundPosition: "11% 4%"}}>

                    </div>
                    <div className="hero is-fullheight hero-two"
                         style={{ background: `url(${page.hero_two && page.hero_two.url}) no-repeat center`, backgroundSize: 'cover', backgroundPosition: "11% 4%"}}>
                    </div>
                    <div className="art-header">
                        <p className="art-title-text">{page.content && page.content[0].text}</p>
                        <h3 className="me">by Robin Beechey</h3>
                    </div>
                </div>

                <div className="container art-showcase">
                    <div className="section">
                        <div className="art-title">
                            <h1>The People</h1>
                            <p>Show us some love on ig:&nbsp;
                            <a target="_blank" href={`https://www.instagram.com/${page.ig_link && page.ig_link[0].text}/`}
                               aria-hidden="true">@{page.ig_link && page.ig_link[0].text}</a>
                            </p>
                        </div>
                        <Scroller projects={page.showcase}/>
                    </div>
                </div>
                <HireMe page={page}/>
            </Layout>
        )
    }

}

export default Art;