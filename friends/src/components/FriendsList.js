import React from 'react'

const FriendsList = (props) => {
    return (
        <div className='friend-card'>
            <div className='friend-info'>
                <h4>{props.friendProp.name}</h4>
                <p>{props.friendProp.age}</p>
                <p>{props.friendProp.email}</p>
            </div>
        </div>
    )


}
export default FriendsList