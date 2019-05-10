import React from 'react'

class AddFriendForm extends React.Component{
    constructor(){
        super()
        this.state = {
            item:{
                name:'',
                age:'',
                email:''
            }
        }
    }

    handleProp = (event) => {
        event.persist()
        this.setState (prevState => ({
            item : {...prevState.item,
                [event.target.name]:event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addItemProp(this.state.item)
        this.setState({
            item:{
                name:'',
                age:'',
                email:''
            }
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                placeholder='enter name' 
                onChange={this.handleProp}
                value={this.state.item.name}
                name='name'
                />
                <input 
                placeholder='enter age' 
                onChange={this.handleProp}
                value={this.state.item.age}
                name='age'
                />
                <input 
                placeholder='enter email' 
                onChange={this.handleProp}
                value={this.state.item.email}
                name='email'
                />
                <button>Save</button>
            </form>
        )
    }
}

// const AddFriendForm = () => {
//     return (
//         <form>
//             <input placeholder='enter name' />
//             <input placeholder='enter age' />
//             <input placeholder='enter email' />
//             <button>Save</button>
//         </form>
//     )
// }
export default AddFriendForm