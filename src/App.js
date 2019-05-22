import React, {Component} from 'react';
import CardList from './Components/CardList'
import './Styles/App.css'


class App extends Component {
	constructor(){
		super()
		this.state = {
			users: []
		}
	}


	  componentDidMount(){
	    fetch('https://randomuser.me/api/?results=20')
	      .then(response => response.json())
	      .then(data => {
	        this.setState({users: data.results})
	      })
	  }


	render(){

		 return (
		    <div className="tc">
		      <h1>UserBase</h1>  
		      <CardList users={this.state.users} />
		    </div>
		  );
	}
	 
}

export default App;
