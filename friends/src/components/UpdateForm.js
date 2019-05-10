import React from 'react'

class UpdateForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item:this.props.activeItem
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
        this.props.updateItem(this.state.item)
        
    }

    render(){
        return (
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
                <button>Update</button>
            </form>
        )
    }
}
export default UpdateForm