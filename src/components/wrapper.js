import React from "react";
import Prismic from "prismic-javascript";
import {connect} from "react-redux";
import {contentFetching, contentLoaded, contentSetPage, contentTypeSetPage} from "../actions/content";
import {CONTENT_FORMATS, getApi, getContent} from "../../common/prismic";
import _404 from "./404";
import Layout from "./_layout";
import {
    getFormattedContent, getOrderedContent, getTypeByUID, getTypeContent, getTypeFormat,
    getTypePage
} from "../selectors/content";
import Loading from '../components/Loading';

const getComponent = (type, index) => {
    if (index) {
        try {
            return require(`./${type}-index`).default;
        }
        catch (e) {
            return _404;
        }
    }
    try {
        return require(`./${type}`).default;
    }
    catch (e) {
        return _404;
    }
};

class Wrapper extends React.Component {
    componentWillMount() {
        this.prepData.bind(this)();
    }

    componentWillReceiveProps(nextProps) {
        const url = this.props.match.url;
        const nextUrl = nextProps.match.url;
        if (url !== nextUrl) {
            this.prepData.bind(this)(nextProps);
        }
    }

    async prepData(nextProps) {
        let props = nextProps || this.props;

        const params = props.match.params;

        props.dispatch(contentFetching());

        const content = await getContent(params.type, params.uid);

        if (typeof content.length !== 'undefined') {

            props.dispatch(contentTypeSetPage(params.type, props.page || 1));
            content.map((page) => {
                props.dispatch(contentLoaded(page, page.type, page.uid));
            });
        } else {

            props.dispatch(contentLoaded(content, content.type, content.uid));
        }
    }

    render() {
        if (this.props.fetching === true && !this.props.content) {
            return (
                <Loading/>
            );
        }

        if (!this.props.content) {
            return <_404 />;
        }

        let index = !this.props.match.params.uid && !this.props.content.id;

        let Component;

        if (!this.props.match.params.uid) {
            Component = getComponent(this.props.match.params.type, index);
        }
        else {
            Component = getComponent(this.props.match.params.type);
        }

        return <Component {...this.props} />
    }
}

const mapStateToProps = (state, props) => {
    const {type, uid} = props.match.params;
    const format = getTypeFormat(state, type);

    return {
        content: getFormattedContent(state, type, uid),
        fetching: state.content.fetching,
        type: type,
        uid: uid,
        page: getTypePage(state, type),
        format: format,
    };
};

export default connect(mapStateToProps)(Wrapper);