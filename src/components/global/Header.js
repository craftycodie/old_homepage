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
                                        <span style={{color:"#dcdcaa"}}>alexNewark</span>
                                        <span style={{color:"#d4d4d4"}}>();</span>
                                    </b>
                                </h1>
                                <p>
                                    <b>
                                        <span style={{color:"#d7ba7d"}}>#Norwich</span>
                                        <span style={{color:"#d4d4d4"}}>{" {} "}</span>
                                        <span style={{color:"#608b4e"}}>/* Software Engineer */</span>
                                        </b>
                                    <br/>
                                    <span style={{color:"#808080"}}>{"<"}</span>
                                    <span style={{color:"#4ec9b0"}}>Student </span>
                                    <span style={{color:"#9cdcfe"}}>at</span>
                                    <span style={{color:"#d4d4d4"}}>=</span>
                                    <span style={{color:"#ce9178"}}>"UEA" </span>
                                    <span style={{color:"#808080"}}>{"/>"} </span>
                                    <span style={{color:"#569cd6"}}>{"{"}</span>
                                    <span style={{color:"#608b4e"}}>/* Other things. */</span>
                                    <span style={{color:"#569cd6"}}>{"}"}</span>
                                </p>
                            </div>
                            <div className="right">
                                <img src="https://pbs.twimg.com/profile_images/954254230314979328/ISO3BgXP_400x400.jpg"/>
                            </div>
                        </header>
                    </div>
                </div>
                <Navigation />
            </div>
        );
    }
}