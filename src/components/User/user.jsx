import React,{useEffect,useState} from 'react'
import { Link,Switch,useHistory,Route } from 'react-router-dom'
import './style.css'
import profile from '../../images/sunset-g7885c7c50_1920.jpg'
import Enrolment from '../Enrolment/enrolment'
import EnrolledList from '../EnrolledList/enrolledList'

const User = () => {

    const [user, setUser] = useState(null)

    useEffect(()=>{
  const items = JSON.parse(localStorage.getItem('user'));
  if (items) {
   setUser(items);

  }
    },[])

   
    console.log(user);

  return (
    <div className='user'>
        <div className="header">
            
            <Link to="/" className='li-item' >Home</Link>
            <Link to="/" className='li-item'>About</Link>
            <Link to="/" className='li-item'>Logout</Link>
        </div>
        <div className="all-content">
      <div className="profile">
        <div className="pic">
            <img src={profile} alt="Profile pic" />
        </div>
        <div className="details">
            <div className="row">
                <div className="col">
                <p>First Name </p>
                <p className='bold-text'>{user?.firstName}</p>
                </div>
                <div className="col">
                <p>Last Name </p>
                <p className='bold-text'>{user?.lastName}</p>
                </div>
                <div className="col">
                <p>Age </p>
                <p className='bold-text'>{user?.age}</p>
                </div>
            </div>
            <div className="row">
            <div className="col">
                <p>Phone </p>
                <p className='bold-text'>{user?.phone}</p>
                </div>
                <div className="col">
                <p>Email </p>
                <p className='bold-text'>{user?.email}</p>
                </div>
                <div className="col">
                <p>Active </p>
                <p className='bold-text'>{true?"Yes":"No"}</p>
                </div>
            </div>
        </div>
        
      </div>
      <div className="links">
            <Link to="/user/list" className='user_btn'>Enrolled</Link>
            <Link to="/user/enroll" className='user_btn'>Enrol</Link>
        </div>
        <div className="list">
            <Switch>
                <Route path="/user/enroll">
                <Enrolment user={user}/>
                </Route>
                <Route path="/user/list">
                    <EnrolledList user={user} />
                </Route>
            </Switch>
        </div>
        </div>
    </div>
  )
}

export default User