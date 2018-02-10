import React from 'react';
import './prev-guesses.css';

export default function PreviousGuesses(props){
	const guesses = props.prevGuesses.map((item, index) => <li key={index}>{index + 1}. {item}</li>);

	if(props.prevGuesses.length > 0){
		return(
			<div className="prevGuesses">
				<h3>Previous Guesses</h3>
				<ol className="guesses">
					{guesses}
				</ol>
			</div>
		);
	}

	return(
		<div className="prevGuesses">
			<h3>Your guesses will be shown down below</h3>
		</div>
	);
	
}