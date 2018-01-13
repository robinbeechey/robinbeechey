import React, { Component } from 'react';
import {RichText} from "prismic-reactjs";

const HireMe = ({page}) => {

    return (
        <div className="container">
            <div id="hire-me">
                {page.hire_context && RichText.render(page.hire_context)}
                {page.hire_text && RichText.render(page.hire_text)}
                <a className="msg-button" href="mailto:robinbeechey@gmail.com"><i className="fa fa-envelope-o"></i>&nbsp;Message Me</a>
            </div>
        </div>

    )
};

export default HireMe;