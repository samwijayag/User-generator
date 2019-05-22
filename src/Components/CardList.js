import React from 'react';
import Card from './Card';


const CardList = ({users}) => {
	
	const cardComponent = users.map((user, i)=>{
		return (
			<Card 
				key={i} 
				image={users[i].picture.large} 
				firstName={users[i].name.first} 
				lastName={users[i].name.last} 
				email={users[i].email}
			/>
		)
	})

	return(
		<div>
	     	{cardComponent}
	    </div>
	)
}

export default CardList