import React from "react"
import Album from "./portfolio/Album"
import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {
  render() {
		return (
		<div className="page">
			<div className="centerMargins" id="portfolio">
				<h2>Hi, I'm Codie and I make music! 🎵</h2>
				<p>If you would like to learn more about me, and my work, try this link!</p>
				<Link to="/about">I Wanna Learn More</Link>
				<div className="projectSection">
					<div className="row">
						<Album name="Almost Tangible" img="./img/portfolio/albums/AlmostTangible.jpg"/>
						<Album name="1920" img="./img/portfolio/albums/1920.png"/>
						<Album name="Old Stuff" img="./img/portfolio/albums/OldGhosts.png" />
					</div>
				</div>
			</div> 
		</div>
	);
  }
}