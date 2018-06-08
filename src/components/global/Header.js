import React from "react"

import Navigation from "./Navigation"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="headerImage">
                    <div>
                        <header>
                            <div className="left">
                                <h1>
                                    <b>
                                        <span>alexNewark</span>
                                        <span>();</span>
                                    </b>
                                </h1>
                                <p>
                                    <b>
                                        <span>#Norwich</span>
                                        <span>{" {} "}</span>
                                        <span
                                        // eslint-disable-next-line
                                        >/* Software Engineer */</span>
                                        </b>
                                    <br/>
                                    <span>{"<"}</span>
                                    <span>Student </span>
                                    <span>at</span>
                                    <span>=</span>
                                    <span>"UEA" </span>
                                    <span>{"/>"} </span>
                                    <span>{"{"}</span>
                                    <span
                                    // eslint-disable-next-line
                                    >/* Other things. */</span>
                                    <span>{"}"}</span>
                                </p>
                            </div>
                            {/* <div className="right">
                                <img src="https://pbs.twimg.com/profile_images/954254230314979328/ISO3BgXP_400x400.jpg"/>
                            </div> */}
                        </header>
                    </div>
                </div>
                <Navigation location={this.props.location}/>
            </div>
        );
    }
}