import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component{
	onSubmit(e){
		e.preventDefault();
		const value = parseInt(this.textInput.value, 10);

		if(isNaN(value)){
			this.textInput.value = "";
			return alert('Please only type in a number.');
		}

		if(this.props.numArray.length > 0 && this.props.numArray.includes(value)){
			this.textInput.value = "";
			return alert('You already guessed this number.');
		}

		this.props.onSubmit(value);
		this.textInput.value = "";
	}

	render(){
		if(this.props.status === "end"){
			return (
			<form className="guessForm" onSubmit={(e) => this.onSubmit(e)}>
				<label>Enter your guess:</label>
				<input type="text" ref={input => this.textInput = input} maxLength="3" required />
				<button disabled>Submit</button>
			</form>
			);
		}
		else{
			return (
			<form className="guessForm" onSubmit={(e) => this.onSubmit(e)}>
				<label>Enter your guess:</label>
				<input type="text" ref={input => this.textInput = input} maxLength="3" required />
				<button>Submit</button>
			</form>
			);
		}
		
	}
}