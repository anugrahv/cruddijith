import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addUser, deleteUser, updateUsername } from './features/Users';
import { useState } from 'react';


function App() {
const dispatch= useDispatch();

  const userList=useSelector((state) => state.users.value)
  const [name, setName]=useState("")
  const [username, setUsername]=useState("")
  const [newUsername, setNewUsername]=useState("")
  console.log(newUsername);

  return (
    <div className="App box-shadow-lg">
<h1> EMPLOYEE DETAILS</h1>
    <div className='addUser shadow-lg '>

<input   type='text' placeholder='Name...' onChange={(event)=>{
  setName(event.target.value)}}/>

<input className='me-3'  type='text' placeholder='Username...'  onChange={(event)=>{
  setUsername(event.target.value)}}/>


<button className='b1' onClick={()=>
 {dispatch(addUser({id:userList[userList.length-1].id +1, name, username}))}} >Add User</button>

    </div>
<div className='displayUsers'>
  {userList.map((user)=>{
    return (
    <div className=' shadow-lg a1 w-50' > 
      <h1> {user.name}</h1>
      <h1> {user.username} </h1>
      <input type='text' placeholder='New Username'  onChange={(event)=>{
  setNewUsername(event.target.value)
  }}/>

  <button className='b2' onClick={()=>{
    dispatch(updateUsername({id:user.id ,username: newUsername}))
  }}> Update</button>

  <button className='b3' onClick={()=>{
    dispatch(deleteUser({id:user.id}))
  }}> Delete </button>

       </div>
    );
  })}
</div>

    </div>
  );
}

export default App;
