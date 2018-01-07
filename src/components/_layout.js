import React from "react";
import {connect} from "react-redux";
import {RichText} from "prismic-reactjs";
import Nav from "./_nav";
import {getTypeContent} from "../selectors/content";

class Layout extends React.Component {

    renderNav() {
        return (
            <Nav/>
        )
    }

    renderFooter() {
        const settings = this.props.settings.data || {};
        return (
            <footer className="section" id="page-footer">
                <div className="columns">
                    <div className="column">
                        <div className="has-text-centered">
                            {settings.footer_content && RichText.render(settings.footer_content)}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

    render() {

        return (
            <div>
                <div className={`section ${this.props.className}`} id={this.props.id}>
                    <div className="container">
                        {this.props.children}

                    </div>
                </div>

            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        settings: getTypeContent(state, 'settings') || {},
    };
};

export default connect(mapStateToProps)(Layout);