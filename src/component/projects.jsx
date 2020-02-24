import React from "react";
import Many from "../img/many.jpg";
import MemphisCrawfisCo from "../img/MemphisCrawfisCo.jpg";

import PropTypes from "prop-types";
import blitz from '../img/blitz.jpg'
export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>

						<div className="row my-5">

							<div
								className={
									"testbg  col-12 col-sm-12 col-md-6 col-lg-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Many</h2>
									</div>
									<div>
										<button
											id="many-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"many"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
				
							<div
								className={
									"mccbg col-12 col-sm-12 col-md-6 col-lg-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Memphis Crawfish Company #2</h2>
									</div>
									<div>
										<button
											id="mcc-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var mcc = document.getElementById(
													"mcc"
												);
												modalBG.style.display = "block";
												mcc.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
						<hr />
						<div className={"row my-5"}>
							<iframe id="bltVideo" className={"bltvideo col-12 col-sm-12 col-md-6 col-lg-6"} title="Blitz Build Project" width="399" src="https://www.youtube.com/embed/aWG2mwJWOw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
											<br/>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-6 col-lg-6" +
									this.props.fadeIn
								}>

								<div className="overlay">
									<div className="text">
										<h2>Blitz Build</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card" >
					<div id="many" className="modal-card">
						<div className="visual">
							<img src={Many} alt="" />
						</div>
						<div className="modal-info">
							<h2>Many</h2>
							<div className="modal-description">
								<ul>
									<li>
										Marketing and e-commerce website.
									</li>
									<li>
										Designed with HTML5, CSS3, Bootstrap,
										Webpack, Wordpress, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4><a href="https://www.motherafricaneedsyou.org">View The Live Demo</a></h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"many"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="mcc" className="modal-card">
						<div className="visual">
							<img src={MemphisCrawfisCo} alt="" />
						</div>
						<div className="modal-info">
							<h2>Memphis Crawfish Company #2</h2>
							<div className="modal-description">
								<ul>
									<li>
										Marketing website for a crawfish foodtruck.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Parallax Effect,AnimateCss,
										SmoothScrolling(UI), and React.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="http://memphiscrawfishcompany-2.com"
									rel="noopener noreferrer" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var mccModal = document.getElementById(
											"mcc"
										);
										modalBG.style.display = "none";
										mccModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={blitz} alt="" />
						</div>
						<div className="modal-info">
							<h2>Blitz Build</h2>
							<div className="modal-description">
								<ul>
									<li>
										Blitz Build is a web application for project managers in the construction industry.
									</li>
									<li>
										Developed with  React,Node, PostgreSQL, Semantic-Ui ,HTML5,  Bootstrap, Aws s3, Scss
										.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="https://blitzbuild.construction" rel="noopener noreferrer" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
