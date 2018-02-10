import React from 'react';
import './temp.css';

export default function Temp(props){
	return(
		<div className="temp">
			<h4><em>{props.value}</em></h4>
		</div>
	);
}