import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
						<a
								className="px-3"
								href="https://github.com/mharley12345"
								target="_blank"
								rel="noopener noreferrer">
								<img width="6%" className="img-fluid" src={github} alt=""/>
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
								<img width="6%" className="img-fluid" src={codepen} alt=""/>
							</a>
							
						</div>
					</div>
					<h5 style={{paddingLeft:"15px"}} className="pt-4">Michael Harley &copy;{new Date().getFullYear()}</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
