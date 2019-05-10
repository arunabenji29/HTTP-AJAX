import React from 'react'

const FriendsList = (props) => {

    // const routeToFriend = (event, friend) => {
    //     event.preventDefault();
    //     props.history.push(`/${friend.id}`)
    // }

    const deleteItem = (event,friend) => {
        event.preventDefault();
        props.deleteItem(friend.id)
    }
    const updateForm = (event,friend) => {
        event.preventDefault();
        props.setUpdateForm(friend)
    }

    return (


        <div className='all-friends'>
            {props.friends.map(friend => (

                <div
                    // onClick={event => routeToFriend(event, friend)}
                    className='friend-card'
                    key={friend.email}
                >
                    <h4>{friend.name}</h4>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    
                    <button onClick={event => updateForm(event,friend)}>Update</button>
                    <button onClick={event => deleteItem(event,friend)}>Delete</button>
                </div>

            ))}
        </div>



    )


}
export default FriendsList