import React from 'react';
import './instruc-start.css';

export default function InstrucStartButtons(props){
	if(props.status === "waiting"){
		return(
			<div className="instruc-start-buttons">
				<button>Instructions</button>
			</div>
		);
	}
	else{
		return(
			<div className="instruc-start-buttons">
				<button>Instructions</button>
				<button onClick={()=> props.onStartClick()}>Start a new game</button>
			</div>
		);
	}
}