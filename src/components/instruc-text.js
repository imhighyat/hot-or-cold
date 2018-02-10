import React from 'react';

export default function InstructionsText(){
	return (
		<div>
			<p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
			<ol>
				<li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
				<li>You need to guess until you can find the hidden secret number.</li>
				<li>You will get feedback if you're guess is close ("hot") or far ("cold") from the number I picked.</li>
			</ol>
		</div>
	);
}