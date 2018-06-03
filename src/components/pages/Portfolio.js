import React from "react"
import Project from "./portfolio/Project"
//import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {
  render() {
		return (
		<div className="page">
			<div className="centerMargins" id="portfolio">
				<div className="projectSection">
					<h2>Personal Projects</h2>
					{/*TODO: Refactor this, a lot! Projects should be components*/}
					<div className="row">
						<Project name="Skirmish" description={<span>Codename Raider.<br/>An online shooter.</span>} img="https://imgur.com/0KllZrM.png" primaryTags={["C#", "MongoDB", "C++"]} secondaryTags={["NodeJS", "JavaScript", "HLSL"]}/>
						<Project name="Banshee" description="A Beta Minecraft modpack adding many features from newer releases." primaryTags={["Java"]} secondaryTags={["C#", "NodeJS"]}/>
						<Project name="Marathon" description={<span>Minecraft Server Management Tool<br/>My first solution!</span>} img="https://image.prntscr.com/image/U4JHLS-lTw6EQ2Zrj2_RZg.png" primaryTags={["C#"]} secondaryTags={["VB"]}/>
						<Project name="Foundry" description="A tool for editing Halo: Online maps variants." img="https://image.prntscr.com/image/r9wTVdpOTdiqq7CzdTU9nA.png" primaryTags={["C#"]} secondaryTags={["C++"]}/>
						<Project name="Minecord" description="A Minecraft &lt;---&gt; Discord chat bot." primaryTags={["Java", "Maven"]} secondaryTags={["Discord API"]}/>
						<Project name="Homepage" description="MERN stack single page site with basic blog api." img="/favicon.png" primaryTags={["React.js", "JavaScript", "MongoDB"]} secondaryTags={["Express", "NodeJS"]}/>
						<Project name="themeScape" description="A web, desktop and Mobile application for managing and sharing wallpapers." img="https://i.imgur.com/W5NVZtx.png" primaryTags={["PHP", "JavaScript", "C#"]}/>
						<Project name="Armour Customizer" description="A simple WPF application to help Halo: Online players edit their settings." primaryTags={["WPF", "C#"]}/>
						<Project name="Untitled (Unity Reversing)" description="Research project, creating patches to explore and modify an unreleased Unity game." primaryTags={["MSIL (CIL)", "C#"]}/>
						<Project name="Skyfall" description="A simple minecraft server plugin for void teleportation." primaryTags={["Java", "Maven"]}/>
						{/* <Project name="Halo: Online Fixes" description="Many bug fixes for the now cancelled PC game Halo: Online" primaryTags={["C++", "x86 Assembly"]}/>
						<Project name="Halo: Online Headhunter" description="A research project, adding a gamemode to Halo: Online" primaryTags={["C++", "x86 Assembly"]}/> */}

						<Project name="Many More" description="Many research projects, game mods and other misc projects." img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Tab_plus.svg/2000px-Tab_plus.svg.png" primaryTags={["LUA"]}/>
					</div>
				</div>
				<div className="projectSection">
					<h2>Group Projects</h2>
					<div className="row">
						<Project name="Supernova" description={<span>Halo themed solo and multiplayer PC game.<br/>In Development.</span>} img="https://media.discordapp.net/attachments/324967267483779072/404097123236315136/SupernovaSmallwShadow.png?width=1124&height=1036" primaryTags={["Software Engineering", "C#"]}/>
						{/* <Project name="React Infinite Scroll Component" description="A smart component I tweaked tweaked to fix a bug I experienced." primaryTags={["JavaScript", "React.js"]}/> */}
						<Project name="Undisclosed Projects" description="Additional projects I can't talk about yet :(" img="http://www.emoji.co.uk/files/mozilla-emojis/symbols-mozilla/12053-black-question-mark-ornament.png" primaryTags={["C++", "x86 Assembly"]} secondaryTags={["Reverse Engineering", "C#"]}/>
					</div>
				</div>
				<div className="projectSection">
					<h2>Work Experience</h2>
					<div className="row">
						<Project name="Automatic Data Processing (ADP)" description={<span>Software Development Intern<br/>Peterborough, 2016</span>} img="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Automatic_Data_Processing_%28logo%29.svg/1280px-Automatic_Data_Processing_%28logo%29.svg.png" primaryTags={["Agile Scrum", "JavaScript", "Selenium"]} secondaryTags={["NodeJS"]}/>
						<Project name="Mold.Agency" description={<span>Backend Web Developer<br/>Peterborough, 2017</span>} img="http://www.gophantoms.co.uk/wp-content/uploads/2017/08/mold-logo-pink.png" primaryTags={["NodeJS", "JavaScript"]} secondaryTags={["MongoDB", "MySQL", "PHP"]}/>
					</div>
				</div>
				<div className="projectSection">
					<h2>Education</h2>
					<div className="row">
						<Project name="University of East Anglia (UEA)" description={<span>Master of Computing Sciences<br/>Norwich, 2017 (Ongoing)</span>} img="https://www.uea.ac.uk/documents/2654296/0/UEA_NEW_BRAND_Magenta.png/b14edc4b-c4ca-4197-bee9-7e3a562027ca?t=1455793092763" primaryTags={["Java", "Python", "MySQL"]} secondaryTags={["JavaScript"]}/>
						<Project name="Peterborough Regional College" description={<span>Level 3 BTEC Extended Diploma in Software Development (D*D*D*)<br/>Peterborough, 2015 - 2017</span>} img="https://www.studenthut.com/sites/default/files/styles/drudesk_profile/public/university_logo%E2%80%8E_folder_158?itok=lNBX1Oi8" primaryTags={["C#", "PHP", "C"]} secondaryTags={["Python", "C++", "Assembly"]}/>
					</div>
				</div>
			</div> 
		</div>
		
	);
  }
}