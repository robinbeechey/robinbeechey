import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "./components/wrapper";
import Loading from './components/Loading';
import {Provider} from "react-redux";
import {store, history} from "./store";
import "./main.scss";
import {ConnectedRouter} from "react-router-redux";
import {Route} from "react-router";
import {loadSettings} from "../common/prismic";
import "font-awesome-sass-loader";
import ReactGA from 'react-ga';
import Art from './components/Art';
import 'style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.css';


ReactGA.initialize('UA-60508050-1');

ReactGA.set({page: window.location.pathname + window.location.search});
ReactGA.pageview(window.location.pathname + window.location.search);


loadSettings(store);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path={'/'} render={() => {
                  return <Wrapper match={{params: {type: 'homepage'}}}/>
                }}/>
                <Route exact path={'/'} render={() => {
                  return <Wrapper match={{params: {type: 'art'}}}/>
                }}/>
                <Route exact path={'/:type'} component={Wrapper}/>
                <Route exact path={'/:type/:uid'} component={Wrapper}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);