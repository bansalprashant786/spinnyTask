import React from 'react';

const Card = ({ cardData }) => {
	return(
		<div className='card'>
			<div className='cardwrapper'>
			<img src={cardData.image_url} alt={cardData.title}/>
			<p>{cardData.title}</p>
			</div>
		</div>
	);
};

export default Card;
