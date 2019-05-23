import React, {Component} from 'react';
import CardList from './Components/CardList'
import SearchBox from './Components/SearchBox'
import Scroll from './Components/Scroll'
import './Styles/App.css'


class App extends Component {
	constructor(){
		super()
		this.state = {
			users: [],
			searchfield: '',
		}
	}


	  componentDidMount(){
	    fetch('https://randomuser.me/api/?results=50')
	      .then(response => response.json())
	      .then(data => {
	        this.setState({users: data.results})
	      })
	  }

	  onSearchChange = (event) => {	  	
	  	this.setState({searchfield: event.target.value})  
	  }


	render(){

			const filteredUsers = this.state.users.filter(user =>{
	  		return user.name.first.toLowerCase().includes(this.state.searchfield.toLowerCase())	
	  		  		
	  	})

		 return (
		    <div className="tc">
		      <h1 className='tc'>UserBase</h1>  
		      <SearchBox searchChange={this.onSearchChange} />
		      <Scroll>
		      	<CardList users={filteredUsers} />
		      </Scroll>
		    </div>
		  );
	}
	 
}

export default App;
