import React from 'react';

const Card = (props) =>	{
	return(
		<div className="bg-light-gray dib br4 pa4 ma2 grow bw3 shadow-4"> 
			<img src={props.image} alt="user"/>
			<div>
				<h2>{props.firstName} {props.lastName}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	)
}

export default Card;