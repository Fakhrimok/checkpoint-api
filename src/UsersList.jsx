import React from 'react'
import UserCard from './UserCard'

const UsersList = ({usersList}) => {
  return (
    <div>
        {usersList.map((user)=> {
            return <UserCard user={user}/>
        })}
    </div>
  )
}

export default UsersList