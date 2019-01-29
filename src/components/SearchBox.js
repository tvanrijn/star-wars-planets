import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba bw1 b--navy br-pill avenir b'
				type='search' 
				placeholder='Search planets'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;