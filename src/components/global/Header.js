import React from "react"
import { Link } from "react-router-dom"

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div id="headerImage">
                    <div>
                        <header>
                            <div>
                                <Link to="/"><h1>C3E</h1></Link>
                            </div>
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}