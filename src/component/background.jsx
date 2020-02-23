import React from "react";
import PropTypes from "prop-types";
import myImage from '../img/myImage.jpg'
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
				<img className={"image" + this.props.bounceIn} style={{ width:"300px",borderRadius:"80%"}} src={myImage} alt=""/>
					<h1 id="desktop">
					{"  "}<TextLoop id="desktop">						
					<span id="desktop">Hello, I&apos;m Michael Harley</span>
						<span id="desktop"> A</span>
						<span id="desktop">Full-Stack Web Developer</span> 
						<span id="desktop">From Auburn, Wa</span>
						</TextLoop>{"  "}
					</h1>
					<h3 id="mobile">
						{" "}<TextLoop id="mobile">
						<span id="mobile">Hello,</span>
						<span id="mobile">I&apos;m</span>
						<span id="mobile">Michael Harley</span>
						<span id="mobile">A</span>
						<span id="mobile">Full-Stack</span>
						<span id="mobile">Web Developer</span>
						<span id="mobile">From</span>
						<span id="mobile">Auburn, Wa</span>
						</TextLoop>{" "}
					</h3>
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
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
