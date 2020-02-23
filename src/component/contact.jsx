import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	render() {
		return (
			<div style={{paddingTop:"80px", height:"600px", background:"radial-gradient(#1B2735 0%, #090A0F 100%)",color:"white"}} id="my-contact" className="container text-center my-5">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<form
					style={{marginTop:"20px"}}
					className={this.props.shake}
					action="https://formspree.io/xzbzwbdd"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<button
								style={{backgroundColor:"white" ,color:"black",borderRadius:"2rem",border:"1px #122444 solid",fontSize:"1.2rem",fontWeight:"600",width:"200px",}}
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
