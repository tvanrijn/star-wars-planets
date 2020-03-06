import React from 'react';
import Card from '../Card/Card';

const CardList = ({ planets }) => {
	return (
		<div data-testid='cardlist'>
			{
				planets.map((planet, i) => {
					return (
						<Card 
						key={i}
						name={planets[i].name} 
						rotation={planets[i].rotation_period}
						terrain={planets[i].terrain}
						gravity={planets[i].gravity}
						climate={planets[i].climate}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;