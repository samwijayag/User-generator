import React from 'react';

const Card = ({name,email,id}) =>	{
	return(
		<div className="bg-light-gray dib br2 pa4 ma2 grow bw3 shadow-5 fs3"> 
			<img src={`https://randomuser.me/api/portraits/women/${id}.jpg`} alt="user-image"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div> 
		</div>
	)
}

export default Card;