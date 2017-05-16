import React from 'react'

export default class Bomb extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			secondsLeft: this.props.initialCount
		}
	}

	render(){
		if (this.props.initialCount === 0){
			return (
				<div>Boom!</div>
				)
		}
		return (
			<div>{this.state.secondsLeft} seconds left before I go boom!</div>
		)
	}
}

