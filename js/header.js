import React, {Component} from 'react'

var Header = React.createClass ({
	render: function() {
		return (
			<div className="header">
				<h1>CONGRESSIONAL CUTIES!!!</h1>
				<div className="navBar">
					<a href="#allcuties">See All</a>
					<a href="#favorites">See Faves</a>
				</div>
			</div>
			)
	}
})

export default Header