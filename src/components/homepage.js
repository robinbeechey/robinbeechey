import React from "react";
import {RichText} from "prismic-reactjs";
import Layout from "./_layout";
import Hero from './Home/Hero';
import { Carousel } from 'react-responsive-carousel';


const Scroller = ({projects}) => {

    return (
        <div className="scroller">
            <div className="project-column-wrapper is-mobile columns is-variable">
                {
                    projects.map((project, index)=> {
                        return (
                            <div className="column project is-half" key={index}>
                                <div className="info-wrapper">
                                    <div className="project-border">
                                        <div className="img-wrapper">
                                            <img className="dev-image" src={project.image && project.image.url}/>
                                        </div>
                                        <div className="info">
                                            {project.title &&
                                            <div className="title">
                                                <h2><a href={project.siteurl && project.siteurl.url}
                                                       target="_blank">{RichText.asText(project.title)}</a></h2>
                                                { project.codeurl && project.codeurl.url ?
                                                    <a href={project.codeurl && project.codeurl.url} target="_blank"
                                                       className="circle"><i className="fa fa-code"
                                                                             aria-hidden="true"></i></a> : null}

                                            </div>}

                                            {project.stack &&
                                            <div className="stack"><p>{RichText.asText(project.stack)}</p>
                                            </div> }
                                            {project.description && RichText.render(project.description)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

const TitleHeader = (props) => {
    return (
        <div className={`title-wrapper ${props.type}`}>
            <div className="text-content">
                {props.children}
            </div>
        </div>
    )
};


class Homepage extends React.Component {

    circleClick(height) {
        let target = document.querySelector('.scroll-target');
        let addedHeight = (target.clientHeight / 6) * 5;
        window.scrollTo({top: height + addedHeight, behavior: 'smooth'});
    }

    mobileCheck() {
        let check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    renderCarousel() {
        let stills = this.props.content.data.stills;
        return (
            <Carousel infiniteLoop={true} showStatus={false} showIndicators={false}>
                { stills.map((frame, index)=> {
                    return (
                        <div key={index}>
                            <img src={frame.still.url}/>
                        </div>
                    )
                })}
            </Carousel>
        );

    }


    render() {
        let page = this.props.content.data;

        if (process.env.NODE_ENV !== 'production') {
            console.log(page);
        }
        ;

        let video = (
            <video id="background-video" loop autoPlay muted>
                <source src={page.video_reel && page.video_reel.url}
                        type="video/mp4"/>
                <source src={page.video_reel && page.video_reel.url}
                        type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        );


        let carousel = this.renderCarousel.bind(this);

        let misc = this.mobileCheck() ? carousel() : video;


        return (
            <div>
                <Hero page={page} circleClick={this.circleClick.bind(this)}/>

                <div ref="devSection" id="dev-section" className="dev-container section">
                    <div className="scroll-target half-circle"></div>
                    <div className="container">
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">

                                <TitleHeader type="dev">
                                    <h1>Dev</h1>
                                    <p className="">I have experience as a full stack developer but I focus
                                        on
                                        front-end and use firebase with cloud functions as a
                                        backend</p>
                                </TitleHeader>
                            </div>
                        </div>
                        <Scroller projects={this.props.content.data.dev}/>
                    </div>
                </div>

                <div ref="designSection" id="design-section" className="section">
                    <div className="container design-container">
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">
                                <TitleHeader type="design">
                                    <div className="text-content">
                                        <h1>Design</h1>
                                        <p className="">I do web design, print design and sometimes make some digital
                                            art
                                            with the same tools</p>
                                    </div>
                                </TitleHeader>
                            </div>
                        </div>

                        <Scroller projects={this.props.content.data.design}/>

                        <div className="columns is-full usefull-links">
                            <div className="column">
                                <h5>Useful Links</h5>
                                <ul>
                                    <li><a href="http://www.vanschneider.com/colors" target="_blank">Color Claim</a> by
                                        Tobias van Schneider
                                    </li>
                                    <li><a href="http://lea.verou.me/css3patterns/" target="_blank">CSS3 Patterns
                                        Gallery</a> by Lea Verou
                                    </li>
                                    <li><a href="http://trademarksandsymbols.com/" target="_blank">Trade Marks &
                                        Symbols</a> by Yasaburo Kuwayama
                                    </li>
                                    <li><a
                                        href="http://pierrickcalvez.com/journal/a-five-minutes-guide-to-better-typography"
                                        target="_blank">A Five Minute Guide to Better Typography</a> by Pierrick Calvez
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref="miscSection" id="misc-section" className="misc-container section">
                    <div className="container">
                        <div className="columns misc-wrapper">
                            <div className="column">
                                <TitleHeader type="misc">
                                    <div className="text-content">
                                        <h1>Misc</h1>
                                        <p className="">Filming, editing and
                                            animation { this.mobileCheck() ? '(View on desktop to see the reel)' : ''}</p>
                                    </div>
                                </TitleHeader>
                                {misc}
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Homepage;