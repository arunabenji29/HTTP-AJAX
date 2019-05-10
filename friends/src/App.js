import React from 'react';
import axios from 'axios'
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm'
import Friend from './components/Friend'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      activeItem:null
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })

  }

  addItem = (newItem) => {
    axios
      .post('http://localhost:5000/friends/', newItem)
      .then((res) => {
        console.log(res)
        this.setState({
          friends: res.data
        })
        this.props.history.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  deleteItem = id => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      console.log(res)
      this.setState({
        friends:res.data
      })
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateItem = updatedItem => {
    axios
    .put(`http://localhost:5000/friends/${updatedItem.id}`,updatedItem)
    .then(res => {
      console.log(res)
      this.setState({
        friends:res.data
      })
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  }

  setUpdateForm = item => {
    this.setState({
      activeItem:item
    })
    this.props.history.push('/update-form')
  }

  render() {
    return (
      <div className='app'>

        <nav>
          <NavLink to='/'> Home</NavLink>
          <NavLink to='/add-form'> Add Friend</NavLink>
        </nav>

        {/* <div className='all-friends'> */}
        <Route exact path='/' render={props => (
          <FriendsList {...props}
            friends={this.state.friends}
            deleteItem={this.deleteItem}
            setUpdateForm={this.setUpdateForm}
          />
        )} 
        />
        {/* </div> */}

        <Route path='/update-form'
          render={props => (
            <UpdateForm {...props}
            updateItem={this.updateItem}
            activeItem={this.state.activeItem}
            />
          )} />

        <div className='friend-form'>
          <Route path='/add-form' render={props => (
            <AddFriendForm {...props} 
            addItemProp={this.addItem} />
          )} />

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
