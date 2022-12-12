import React,{useState,useEffect} from 'react'


const UserRegistration = () => {

const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    age:0,
    email:"",
    phone:"",
    password:""
})

const handleChange=(e)=>{
    let {name,value}=e.target;
    setUser(prevState=>({...prevState,[name]:value}));
}

const handleSubmit=()=>{
console.log(user);
}



  return (
    <div>
     <div className='form-container'>
        <input type="text" name="firstName" value={user.firstName} placeholder="First Name" onChange={handleChange}  />
        <input type="text" name="lastName" value={user.lastName} placeholder="Last Name" onChange={handleChange}  />
        <input type="number" name="age" value={user.age} placeholder="Age" onChange={handleChange}  />
        <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange}  />
        <input type="text" name="phone" value={user.phone} placeholder="Phone" onChange={handleChange}  />
        <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}  />
        <button onClick={handleSubmit}>Submit</button>
     </div>
    </div>
  )
}

export default UserRegistration