import React from 'react';

const Card = (props) =>	{
	return(
		<div className="tc bg-light-gray dib br4 pa4 ma2 grow bw3 shadow-5"> 
			<img className="shadow-4 br4 ma2 pa2" src={props.image} alt="user"/>
			<div>
				<h2 className="f4">{props.name}</h2>
				<p className="f6">{props.desc}</p>
				<p className="f5">{props.phone}</p>
				<p className="f6">{props.email}</p>
			</div>
		</div>
	)
}

export default Card;