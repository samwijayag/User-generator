import React from 'react'

const SearchBox = ({searchChange}) => {
	return(
		<input 
		className="pa3 w5 ma3 bw2 shadow-3 dib" 
		type="search" 
		placeholder="search users"
		onChange={searchChange}
		 />
	)
}

export default SearchBox;