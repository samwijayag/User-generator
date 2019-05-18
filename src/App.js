import React from 'react';
import CardList from './Components/CardList'
import {users} from './users';

function App() {
  return (
    <div>
      <CardList users={users} />
    </div>
  );
}

export default App;
