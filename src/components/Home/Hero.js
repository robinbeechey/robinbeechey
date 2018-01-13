import React, { Component } from 'react';
import {RichText} from "prismic-reactjs";


const STYLES = [
    {
        background: {
            'background-color': '#7DE0E6',
            'transition': 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        aColor: {color: '#FF2A93'},
        pColor: {color: 'white'},
        logoColor: {fill: '#FF2A93'}
    },
    {
        background: {
            'background-color': '#B7E3E4',
            'transition': 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        aColor: {color: '#F03F35'},
        pColor: {color: '#2d2d2d'},
        logoColor: {fill: '#F03F35'}
    },
    {
        background: {
            'background-color': '#F0CF61',
            'transition': 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        aColor: {color: 'white'},
        pColor: {color: '#2d2d2d'},
        logoColor: {fill: 'white'}
    },
    {
        background: {
            'background-color': '#FF8B8B',
            'transition': 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        aColor: {color: '#CFFFFF'},
        pColor: {color: 'white'},
        logoColor: {fill: '#CFFFFF'}
    },
    {
        background: {
            'background-color': '#19AAD1',
            'transition': 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        aColor: {color: '#FFCC4C'},
        pColor: {color: 'white'},
        logoColor: {fill: '#FFCC4C'}
    },
    {
        background: {
            'background-color': 'white',
            'transition': 'all 1s cubic-bezier(0.645, 0.045, 0.355, 1)',
        },
        aColor: {color: '#19AAD1'},
        pColor: {color: '#2d2d2d'},
        logoColor: {fill: '#19AAD1'}
    }

];


class Hero extends Component {

    componentDidMount() {
        const linksDiv = document.getElementById('links');
        let height = linksDiv.clientHeight;
        let logoWrapper = this.refs.logoWrapper;
        logoWrapper.style.marginTop = -height + 'px';
        setTimeout(this.loopHome.bind(this), 3000);
    }


    loopHome() {
        let home = this.refs.home;
        let logo = this.refs.logo;
        let links = Array.from(this.refs.links.children);
        const a = document.getElementsByTagName("a");
        const p = document.getElementsByTagName("p");


        let count = 0;

        function doSomething() {
            count === STYLES.length ? count = 0 : null;
            home.style.background = (STYLES[count].background['background-color']);
            home.style.transition = (STYLES[count].background['transition']);


            links.map((el)=> {
                el.firstElementChild.style.color = (STYLES[count].aColor['color']);
            });

            logo.style.fill = STYLES[count].logoColor['fill'];

            count++;
        }

        doSomething();

        setInterval(doSomething, 3000);
    }

    handlePress() {
        this.props.circleClick(this.refs.home.clientHeight);
    }

    render() {

        return (
            <section ref="home" id="home" className="hero is-fullheight">

                <div id="links" className="section links-wrapper">
                    <div ref="links" className="columns links is-mobile is-centered">
                        <div className="column">
                            <a target="_blank" href="https://angel.co/robin-beechey"
                               className="fa fa-angellist"
                               aria-hidden="true"/>
                        </div>
                        <div className="column">
                            <a target="_blank" href="https://www.instagram.com/robinbeechey/"
                               className="fa fa-instagram"
                               aria-hidden="true"/>
                        </div>
                        <div className="column">
                            <a target="_blank" href="https://www.linkedin.com/in/robinbeechey/"
                               className="fa fa-linkedin-square"
                               aria-hidden="true"/>
                        </div>
                        <div className="column">
                            <a target="_blank" href="https://dribbble.com/rubinito"
                               className="fa fa-dribbble"
                               aria-hidden="true"/>
                        </div>
                        <div className="column">
                            <a target="_blank" href="https://github.com/robinbeechey"
                               className="fa fa-github"
                               aria-hidden="true"/>
                        </div>
                        <div className="column">
                            <a href="mailto:robinbeechey@gmail.com" className="fa fa-envelope-o"
                               aria-hidden="true"/>
                        </div>
                        <div className="column">
                            <a target="_blank" href="http://rbcreative.storenvy.com/"
                               className="fa fa-shopping-cart"
                               aria-hidden="true"/>
                        </div>
                    </div>
                </div>

                <div className="hero-body">
                    <div ref="logoWrapper" className="container logo-wrapper">
                        <svg ref="logo" className="rb-logo" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 -22 209.25 173.19">
                            <title>Asset
                                8</title>
                            <g id="Layer_2" data-name="Layer 2">
                                <g className="line-container" id="Layer_9" data-name="Layer 9">
                                    <polygon className="line-1"
                                             points="21 0 0 0 0 72.87 21 109.86 21 0"></polygon>
                                    <polygon className="line-2"
                                             points="22.91 113.22 26.74 119.97 26.74 0 22.91 0 22.91 113.22"></polygon>
                                    <polygon className="line-3"
                                             points="33.03 0 28.64 0 28.64 123.33 33.03 131.05 33.03 0"></polygon>
                                    <polygon className="line-4"
                                             points="41.42 0 36.84 0 36.84 137.77 41.42 145.84 41.42 0"></polygon>
                                    <rect className="line-5" x="45.23" width="5.18" height="149.19"></rect>
                                    <rect className="line-6" x="54.22" width="5.82" height="149.19"></rect>
                                    <path className="line-7"
                                          d="M65.55,72.61a36.22,36.22,0,0,0,7-1.51V1.76a36.22,36.22,0,0,0-7-1.51Z"></path>
                                    <polygon className="line-7"
                                             points="72.52 94.27 65.55 82.19 65.55 149.19 72.52 149.19 72.52 94.27"></polygon>
                                    <path className="line-8"
                                          d="M78,68.81a36.51,36.51,0,0,0,8.11-5.71V9.77A36.51,36.51,0,0,0,78,4.06Z"></path>
                                    <polygon className="line-8"
                                             points="86.14 117.85 78.03 103.8 78.03 149.19 86.14 149.18 86.14 117.85"></polygon>
                                    <polygon className="line-9"
                                             points="91.64 127.39 91.64 149.18 104.23 149.18 91.64 127.39"></polygon>
                                    <path className="line-9"
                                          d="M91.64,56.63a36.43,36.43,0,0,0,0-40.39Z"></path>
                                    <rect className="line-10" x="111.49" y="76.33" width="6.63"
                                          height="72.87"></rect>
                                    <rect className="line-10" x="111.49" y="0.18" width="6.63"
                                          height="72.87"></rect>
                                    <rect className="line-11" x="123.63" y="0.18" width="7.59"
                                          height="72.87"></rect>
                                    <rect className="line-11" x="123.63" y="76.33" width="7.59"
                                          height="72.87"></rect>
                                    <rect className="line-12" x="136.72" y="0.18" width="6.98"
                                          height="72.87"></rect>
                                    <rect className="line-12" x="136.72" y="76.33" width="6.98"
                                          height="72.87"></rect>
                                    <rect className="line-13" x="149.2" y="0.18" width="5.82"
                                          height="72.87"></rect>
                                    <rect className="line-13" x="149.2" y="76.33" width="5.82"
                                          height="72.87"></rect>
                                    <rect className="line-14" x="158.84" y="0.18" width="5.18"
                                          height="72.87"></rect>
                                    <rect className="line-14" x="158.84" y="76.33" width="5.18"
                                          height="72.87"></rect>
                                    <rect className="line-15" x="167.83" y="0.18" width="4.58"
                                          height="72.87"></rect>
                                    <rect className="line-15" x="167.83" y="76.33" width="4.58"
                                          height="72.87"></rect>
                                    <path className="line-16"
                                          d="M176.22,72.88a36.37,36.37,0,0,0,4.38-.68V1a36.37,36.37,0,0,0-4.38-.68Z"></path>
                                    <path className="line-16"
                                          d="M176.22,149a36.37,36.37,0,0,0,4.38-.68V77.17a36.37,36.37,0,0,0-4.38-.68Z"></path>
                                    <path className="line-17"
                                          d="M182.51,1.49V71.73a36.15,36.15,0,0,0,3.83-1.29V2.79A36.15,36.15,0,0,0,182.51,1.49Z"></path>
                                    <path className="line-17"
                                          d="M182.51,77.64v70.24a36.15,36.15,0,0,0,3.83-1.29V78.93A36.15,36.15,0,0,0,182.51,77.64Z"></path>
                                    <path className="line-18"
                                          d="M188.25,69.62a36.43,36.43,0,0,0,0-66Z"></path>
                                    <path className="line-18"
                                          d="M188.25,145.76a36.43,36.43,0,0,0,0-66Z"></path>
                                </g>
                            </g>
                        </svg>
                        <div className="container">
                            <p><strong>Web Dev / Graphic Design / and Artistic Explorations</strong><br/>Personal
                                Projects</p>
                        </div>
                        <div onClick={this.handlePress.bind(this)} className="circle-down-animated"></div>
                    </div>

                </div>

            </section>

        )
    }
}

export default Hero;