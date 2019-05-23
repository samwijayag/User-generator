import React from 'react';
import Card from './Card';


const CardList = ({users}) => {
	
	const cardComponent = users.map((user, i)=>{
		return (
			<Card 
				key={i} 
				image={users[i].picture.large}
				name= {`${users[i].name.first} ${users[i].name.last}`}
				phone={users[i].phone}
				email={users[i].email}
				desc={users[i].location.state}
				
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