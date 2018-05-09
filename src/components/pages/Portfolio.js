import React from "react"
//import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {
  render() {
		return (
		<div className="page">
			<div className="centerMargins" id="portfolio">
				<div className="projectSection">
					<h2>Personal Projects</h2>
					<div className="row">
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Skirmish</h4>
								<p>Codename Raider.<br/>An online shooter.<br/><span className="badge badge-danger">C#</span> <span className="badge badge-danger">MongoDB</span> <span className="badge badge-danger">C++</span> <span className="badge badge-secondary">NodeJS</span> <span className="badge badge-secondary">JavaScript</span> <span className="badge badge-secondary">HLSL</span><br/>
								{/* <Link to="/blog/post/5a665f2d66109e03df668eed">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								<img alt="Skirmish Icon" src="https://imgur.com/0KllZrM.png"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Banshee</h4>
								<p>A Beta Minecraft modpack adding many features from newer releases.<br/><span className="badge badge-danger">Java</span> <span className="badge badge-secondary">C#</span> <span className="badge badge-secondary">NodeJS</span>
								{/* <br/><Link to="/blog/post/5a665f4366109e03df668eef">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Marathon</h4>
								<p>Minecraft Server Management Tool<br/>My first solution!<br/><span className="badge badge-danger">C#</span> <span className="badge badge-secondary">VB</span>
								{/* <br/><Link to="/blog/post/5a665f5a66109e03df668ef0">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
							<img alt="Marathon Icon" src="https://image.prntscr.com/image/U4JHLS-lTw6EQ2Zrj2_RZg.png"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Foundry</h4>
								<p>A tool for editing Halo: Online maps variants.<br/><span className="badge badge-danger">C#</span> <span className="badge badge-secondary">C++</span>
								{/* <br/><Link to="/blog/post/5a665f6766109e03df668ef2">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								<img alt="Foundry Icon" src="https://image.prntscr.com/image/r9wTVdpOTdiqq7CzdTU9nA.png"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Minecord</h4>
								<p>A Minecraft &lt;---&gt; Discord chat bot.<br/><span className="badge badge-danger">Java</span> <span className="badge badge-danger">Maven</span> <span className="badge badge-secondary">DiscordAPI</span>
								{/* <br/><Link to="/blog/post/5a665f7966109e03df668ef3">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								<img alt="" src=""/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Homepage</h4>
								<p>MERN stack single page site with basic blog api.<br/><span className="badge badge-danger">ReactJS</span> <span className="badge badge-danger">JavaScript</span> <span className="badge badge-danger">MongoDB</span> <span className="badge badge-secondary">Express</span> <span className="badge badge-secondary">NodeJS</span>
								{/* <br/><Link to="/blog/post/5a665f7966109e03df668ef3">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								<img alt="Marathon Icon" src="/favicon.png"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>themeScape</h4>
								<p>A web, desktop and Mobile application for managing and sharing wallpapers.<br/><span className="badge badge-danger">PHP</span> <span className="badge badge-danger">JavaScript</span> <span className="badge badge-danger">C#</span>
								{/* <br/><Link to="/blog/post/5a665fa266109e03df668ef6">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								<img alt="themeScape Icon" src="https://i.imgur.com/W5NVZtx.png"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Armour Customizer</h4>
								<p>A simple WPF application to help Halo: Online players edit their settings.<br/><span className="badge badge-danger">WPF</span> <span className="badge badge-danger">C#</span>
								{/* <br/><Link to="/blog/post/5a665fa266109e03df668ef6">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Untitled (Unity Reversing)</h4>
								<p>Research project, creating patches to explore and modify an unreleased Unity game.<br/><span className="badge badge-danger">.NET CIL</span> <span className="badge badge-danger">C#</span></p>
							</div>
							<div className="right">
								<img alt="" src=""/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Skyfall</h4>
								<p>A simple minecraft server plugin for void teleportation.<br/><span className="badge badge-danger">Java</span> <span className="badge badge-danger">Maven</span></p>
							</div>
							<div className="right">
								<img alt="" src="https://"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Many More</h4>
								<p>Many research projects, game mods and other misc projects.<br/><span className="badge badge-danger">LUA</span></p>
							</div>
							<div className="right">
								<img alt="Plus Icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Tab_plus.svg/2000px-Tab_plus.svg.png"/>
							</div>
						</div>
					</div>
				</div>
				<div className="projectSection">
					<h2>Group Projects</h2>
					<div className="row">
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h3>'Supernova'</h3>
								<p>Halo themed solo and multiplayer PC game.<br/>In Development.<br/><span className="badge badge-danger">C#</span></p>
							</div>
							<div className="right">
								<img alt="Supernova Icon" src="https://media.discordapp.net/attachments/324967267483779072/404097123236315136/SupernovaSmallwShadow.png?width=1124&height=1036"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Undisclosed Projects</h4>
								<p>Additional projects I can't talk about yet :(<br/><span className="badge badge-danger">C++</span> <span className="badge badge-danger">x86 Assembly</span> <span className="badge badge-secondary">Reverse Engineering</span> <span className="badge badge-secondary">C#</span> <span className="badge badge-secondary">JavaScript</span></p>
							</div>
							<div className="right">
								<img alt="?" src="http://www.emoji.co.uk/files/mozilla-emojis/symbols-mozilla/12053-black-question-mark-ornament.png"/>
							</div>
						</div>
					</div>
				</div>
				<div className="projectSection">
					<h2>Work Experience</h2>
					<div className="row">
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Automatic Data Processing (ADP)</h4>
							<p>Software Development Intern<br/>Peterborough, 2016<br/><span className="badge badge-danger">Agile Scrum</span> <span className="badge badge-danger">JavaScript</span> <span className="badge badge-danger">Selenium</span> <span className="badge badge-secondary">NodeJS</span></p>
							</div>
							<div className="right">
								<img alt="ADP Logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Automatic_Data_Processing_%28logo%29.svg/1280px-Automatic_Data_Processing_%28logo%29.svg.png"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>Mold.Agency</h4>
								<p>Backend Web Developer<br/>Peterborough, 2017<br/><span className="badge badge-danger">NodeJS</span> <span className="badge badge-danger">JavaScript</span> <span className="badge badge-secondary">MongoDB</span> <span className="badge badge-secondary">MySQL</span> <span className="badge badge-secondary">PHP</span>
								{/* <br/><Link to="/blog/post/5a665fbf66109e03df668ef7">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								<img alt="Mold Logo" src="http://www.gophantoms.co.uk/wp-content/uploads/2017/08/mold-logo-pink.png"/>
							</div>
						</div>
					</div>
				</div>
				<div className="projectSection">
					<h2>Education</h2>
					<div className="row">
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h4>University of East Anglia</h4>
								<p>Masters in Computing Sciences<br/>Norwich, 2017 (Ongoing)<br/><span className="badge badge-danger">Python</span> <span className="badge badge-danger">Java</span> <span className="badge badge-secondary">JavaScript</span></p>
							</div>
							<div className="right">
								<img alt="UEA Logo" src="https://www.uea.ac.uk/documents/2654296/0/UEA_NEW_BRAND_Magenta.png/b14edc4b-c4ca-4197-bee9-7e3a562027ca?t=1455793092763"/>
							</div>
						</div>
						<div className="col-md-6 portfolioProject">
							<div className="left">
								<h3>Peterborough Regional College</h3>
								<p>Level 3 BTEC Extended Diploma in Software Development (D*D*D*)<br/>Peterborough, 2015 - 2017<br/><span className="badge badge-danger">C#</span> <span className="badge badge-danger">PHP</span> <span className="badge badge-danger">C</span> <span className="badge badge-secondary">Python</span> <span className="badge badge-secondary">C++</span> <span className="badge badge-secondary">Assembly</span>
								{/* <br/><Link to="/blog/post/5a665fd966109e03df668ef8">Read Blog Post >></Link> */}
								</p>
							</div>
							<div className="right">
								<img alt="PRC Logo" src="https://www.studenthut.com/sites/default/files/styles/drudesk_profile/public/university_logo%E2%80%8E_folder_158?itok=lNBX1Oi8"/>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</div>
		
	);
		  
		  //(
	// 	<div className="page" id="portfolio">
	// 		<div className="row">
	// 			<div className="col-md-12">
	// 				<div className="row">
	// 					<div className="col-md-12">
	// 						<div className="row">
	// 							<div className="col-md-4">
	// 							</div>
	// 							<div className="col-md-8">
	// 								<h1>Featured Project</h1>
	// 								<p>Project Info</p>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<div className="row">
	// 					<div className="col-md-6">
	// 						<div className="row">
	// 							<div className="col-md-4">
	// 							</div>
	// 							<div className="col-md-8">
	// 							<h2>Other Project</h2>
	// 								<p>Project Info</p>
	// 							</div>
	// 						</div>
	// 						<div className="row">
	// 							<div className="col-md-4">
	// 							</div>
	// 							<div className="col-md-8">
	// 							<h2>Other Project</h2>
	// 								<p>Project Info</p>
	// 							</div>
	// 						</div>
	// 					</div>
	// 					<div className="col-md-6">
	// 						<div className="row">
	// 							<div className="col-md-4">
	// 							</div>
	// 							<div className="col-md-8">
	// 							<h2>Other Project</h2>
	// 								<p>Project Info</p>
	// 							</div>
	// 						</div>
	// 						<div className="row">
	// 							<div className="col-md-4">
	// 							</div>
	// 							<div className="col-md-8">
	// 							<h2>Other Project</h2>
	// 								<p>Project Info</p>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
    // </div>);
  }
}