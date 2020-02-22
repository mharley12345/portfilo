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
					<h1>
					{"  "}<TextLoop>						
					<span>Hello, I&apos;m Michael Harley</span>
						
						<span>A Full Stack Web Developer</span> 
						<span>from Auburn Wa.</span>	
					</TextLoop>{"  "}
					</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
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
