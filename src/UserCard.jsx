import React from 'react'
import './UserCard.css'

const UserCard = ({user}) => {
  return (<div>
    <div class="card-container">
	<h1>{user.id}</h1>
  <h3>{user.name}</h3>
	<h6>{user.username}</h6>
   <p>{user.email}</p>
   <h4>address:</h4>   <p>street {user.address.street}</p>
   <p>city {user.address.city}</p>
   <p>zipcode {user.address.zipcode}</p>
   <p>geo lat {user.address.geo.lat} lng {user.address.geo.lng}</p>
   <p>Phone: {user.phone}</p>
   <p>Website: {user.website}</p>
   <h4>Company</h4> 
   <p>{user.company.name}</p>
   <p>catchPhrase: {user.company.catchPhrase}</p>
   <p>bs: {user.company.bs}</p>
	
	
	
</div>

</div>
  )
}

export default UserCard