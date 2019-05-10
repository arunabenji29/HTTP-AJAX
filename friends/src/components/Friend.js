import React from 'react'
import axios from 'axios'

class Friend extends React.Component{
    constructor(){
        super()
        this.state = {
            friend:null
        }
    }

    componentDidMount(){
        console.log(this.props.match)
        axios
        .get(`http://localhost:5000/friends/${this.props.match.params.id}`)
        .then(res => {
            console.log(res)
            this.setState({
                friend:res.data  
            })}
            )
        .catch(err => console.log(err))
    }

    render(){
        if(!this.state.friend){
            return <h2>Loading item data...</h2>
        }
        return (
            <div className='friend-card'>
                <h4>{this.state.friend.name}</h4>
                    <p>{this.state.friend.age}</p>
                    <p>{this.state.friend.email}</p>
            </div>
        )
    }
}
export default Friend