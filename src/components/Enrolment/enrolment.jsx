import React, { useState,useEffect } from "react";
import { Link ,useHistory} from "react-router-dom";
import { HashLoader } from "react-spinners";
import "../Register/register.css";
import "../Login/login.css";
import {saveEnrolment} from '../../services/enrolment';
import {getBatches} from '../../services/batch';
import './style.css'


function Enrolment({user}) {
  const [enrolment, setEnrolment] = useState({
    userId:user.id,
    batchId:"",
})
const [batches, setBatches] = useState([])
const [flag, setFlag] = useState(false)

const history=useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnrolment((prevState) => ({
      ...prevState,
      [name]: value,
    }));   
  };


  const addEnrolment = (e) => {
    console.log("registering...");
    setFlag(true)
    saveEnrolment(enrolment)
      .then((data) => {
        console.log("success",data);
        if(data["success"]==false)
        alert(data["message"])
        history.push('/user')
      })
      .catch((e) => {
        console.log(e.message);
      });
      setFlag(false)

      e.preventDefault();
  };


useEffect(() => {
    setFlag(true);
    let res=getBatches();
    console.log(res);
    res.then(data=>{
        setBatches(data.batches);
        setFlag(false)
    }).catch(e=>{console.log(e);})
    // setBatches(batches)

}, [])




  return (
     flag ? <div className="center down"><HashLoader color="#36d7b7" loading={flag} speedMultiplier={1} /></div> :

      <div className="enrol-container">
         
        <h3>Join a yoga Class</h3>
        <ul className="enrol-list-container">
          <li className="enrolitem">
          <select name="batchId" value={enrolment.batchId} placeholder="Select batch" onChange={handleChange}  >
           {batches && batches.map(m=> <option value={m.id}>{`${m.startTime} - ${m.endTime}`}</option>)}
            </select>
          </li>
          <li className="enrolitem">
          <button className="enrol-btn" onClick={addEnrolment}>
            Enrol
          </button>
          </li>
      
        </ul>
        
  
       
      </div>

  
  );
}

export default Enrolment;
