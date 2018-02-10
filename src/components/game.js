import React from 'react';
import './game.css'

import AppName from './app-name';
import GuessForm from './guess-form';
import Temp from './temp';
import PreviousGuesses from './prev-guesses';
import InstrucStartButtons from './instruc-start';

export default class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			action: "waiting",
			temp: "cold",
			prevGuesses: [],
			randomNum: Math.floor(Math.random() * 100) + 1
		};
	}

	generateRandomNum(){
		this.setState({
			randomNum: Math.floor(Math.random() * 100) + 1
		});
	}

	status(action){
		this.setState({
			action
		});
	}

	emptyArray(){
		this.setState({
			prevGuesses: []
		});
	}

	addNum(num){
		this.state.prevGuesses.push(num);
	}

	guessNumber(num){
		const diff = Math.abs(num - this.state.randomNum);
		if(num === this.state.randomNum){
			this.setState({
				temp: "Just the right temperature. You guessed it!!!",
				action: "end"
			});
		}
		else if(diff <= 20){
			this.setState({
				temp: "HOOOOTTTTTTT"
			});
		}
		else if(diff > 20 && diff < 50){
			this.setState({
				temp: "WARM"
			});
		}
		else if(diff => 50){
			this.setState({
				temp: "BRRRRR-COOLLLDDD"
			});
		}
	}

	render(){
		if(this.state.action === "waiting"){
			return(
				<div className="gameboard">
					<AppName />
					<GuessForm onSubmit={(num) => {
						this.addNum(num);
						this.status("playing");
						this.guessNumber(num);
					}} numArray={this.state.prevGuesses} status={this.state.action}/>
					<PreviousGuesses prevGuesses={this.state.prevGuesses}/>
					<InstrucStartButtons status={this.state.action} onStartClick={() => {
							this.status("waiting");
							this.emptyArray();
							this.generateRandomNum();
						}
					}/>
				</div>
			);
		}
		else{
			return(
				<div className="gameboard">
					<AppName />
					<GuessForm onSubmit={(num) => {
						this.addNum(num);
						this.status("playing");
						this.guessNumber(num);
					}} numArray={this.state.prevGuesses} status={this.state.action} />
					<Temp value={this.state.temp}/>
					<PreviousGuesses prevGuesses={this.state.prevGuesses}/>
					<InstrucStartButtons status={this.state.action} onStartClick={() => {
							this.status("waiting");
							this.emptyArray();
							this.generateRandomNum();
						}
					}/>
				</div>
			);
		}
	}
}