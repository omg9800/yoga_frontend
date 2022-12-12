import React,{useEffect,useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import './style.css'

const Home = () => {

    const history=useHistory()
    useEffect(() => {
     let user=localStorage.getItem("user");
     if(user)
     history.push({ 
        pathname: '/user',
        state: user
       });
     
    }, [])
    

  return (
    <div className='home'>
     <div className="content">
     <p className="bold">Yoga is the journey of the self."</p>
     <p className="semibold">
     Yoga is the journey of the self, through the self, to the self."
     </p>
     <div className="btn">
        <Link to="/login" className='yoga-signin'>Login</Link>
        <Link to="/register" className='yoga-signin'>Register</Link>
     </div>
     </div>
    </div>
  )
}

export default Home