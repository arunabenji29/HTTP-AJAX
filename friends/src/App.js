import React from 'react';
import axios from 'axios'
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      friends:[]
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res);
      this.setState({
        friends:res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  render(){
    return (
      <div className='app'>

          <div className='all-friends'>
          {this.state.friends.map((friend,index) => (
            <FriendsList key={friend.email} friendProp = {friend} />
            
          ))}
          </div>
          <div className='friend-form'>
          <AddFriendForm />
          </div>
        
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <h1>I am working!</h1>
//     </div>
//   );
// }

export default App;
