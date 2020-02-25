import React from "react";
import PropTypes from "prop-types";
import myImage from '../img/myImage.jpg'
import github from '../img/github.png'
import codepen from '../img/codepen.png'
import linkedin from '../img/linkedin.png'
import WOW from "wowjs";
import TextLoop from 'react-text-loop'
export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}
 
	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
				
					<h1 id="desktop">
					{"  "}<TextLoop id="desktop">						
					<span id="desktop">Hello, I&apos;m Mike Harley</span>
						
						<span id="desktop">A Full-Stack Web Developer</span> 
				
						</TextLoop>{"  "}
					</h1>
					<h4 id="mobile">
						{" "}<TextLoop id="mobile">
						<span id="mobile">Hello,</span>
						<span id="mobile">I&apos;m</span>
						<span id="mobile">Mike Harley</span>
						<span id="mobile">A</span>
						<span id="mobile">Full-Stack</span>
						<span id="mobile">Web Developer</span>
			
						</TextLoop>{" "}
					</h4>
					{/* offset can be changed in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
					<div id="topImg" className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
						<a
								className="px-3"
								href="https://github.com/mharley12345"
								target="_blank"
								rel="noopener noreferrer">
								<img width="9%" className="img-fluid" src={github} alt=""/>
							</a>
						<a
								href="https://www.linkedin.com/in/mike-harley"
								target="_blank"
								rel="noopener noreferrer">
								<img width="9%" style ={{marginRight:"22px"}} className="img-fluid" src={linkedin} alt=""/>
							</a>
							
							
							<a
								href="https://codepen.io/mike-harley"
								target="_blank"
								rel="noopener noreferrer">
								<img width="9%" className="img-fluid" src={codepen} alt=""/>
							</a>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
