import React from "react";
import {RichText} from "prismic-reactjs";
import {Link} from "react-router-dom";
import {linkResolver} from "../../common/prismic";
import Layout from "./_layout";
import {loadMoreContent} from "../actions/content";
import moment from "moment";

class BlogIndex extends React.Component {
  render() {
    if (!this.props.content) {
      return null;
    }
    return <Layout>
      <div className="columns">
        <div className="column is-two-thirds is-offset-2">
          <h1 className="has-text-centered">Blog</h1>
          <hr/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-thirds is-offset-2">
          {this.props.content.map((content) => {
            if (!content.id) {
              return null;
            }
            const page = content.data;
            const textContent = page.content ? RichText.asText(page.content) : '';
            return <article key={content.id}>
              <header>
                <Link to={linkResolver(content)}>
                  {page.title && <h3>{RichText.asText(page.title)}</h3>}
                </Link>
                <time dateTime={content.first_publication_date}>{moment(content.first_publication_date).fromNow()}</time>
              </header>
              <div>
                <p>{textContent.length > 150 ? `${textContent.slice(0, 140)}...` : textContent} <Link
                  to={linkResolver(content)}>[read more]</Link></p>
              </div>
            </article>
          })}
          <hr/>
          <button className="button"
                  onClick={() => {
                    this.props.dispatch(loadMoreContent(this.props.type))
                  }}>
            {this.props.fetching ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </Layout>;
  }
}

export default BlogIndex;