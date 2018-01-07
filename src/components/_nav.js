import React from "react";
import {connect} from "react-redux";
import {RichText} from "prismic-reactjs";
import {Link} from "react-router-dom";
import {linkResolver} from "../../common/prismic";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  render() {
    if (!this.props.settings) {
      console.log('no settings');
      return null;
    }
    const settings = this.props.settings.data;

    return <div id="nav-container">
      <div id="navtrigger" className="is-hidden-tablet" onClick={() => {
        this.setState({visible: true})
      }}>
        menu
      </div>
      <div className={`section ${this.state.visible ? 'visible' : 'hidden'}`}
           style={{
             background: settings.brand_colour,
           }}
           id="navbar">
        <div className="columns">
          <div className="column is-1 has-text-centered is-hidden-tablet" onClick={() => {
            this.setState({visible: false})
          }}>
            <span className="nav-link">Close &times;</span>
          </div>
          <hr className="is-hidden-tablet"/>
          {settings.logo.url && <div className="column is-2 is-hidden-mobile" id="logo-container">
            <Link to={'/'}>
              <img src={settings.logo.url} alt={settings.logo.alt} id="nav-logo"/>
            </Link>
          </div>}
          {settings.navigation.map((nav) => {
            return <div className="column is-1 has-text-centered nav-column" key={nav.link_text}>
              {(() => {
                console.warn(nav.navigation_link);
                switch (nav.navigation_link.link_type) {
                  case 'Web':
                  case 'Media':
                    return <a href={nav.navigation_link.url} className="nav-link">
                      {nav.link_text}
                    </a>;
                  case 'Document':
                    return <Link to={linkResolver(nav.navigation_link)} className="nav-link">
                      {nav.link_text}
                    </Link>;
                }
              })()}
            </div>;
          })}
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.content.settings.content
  };
};

export default connect(mapStateToProps)(Nav);