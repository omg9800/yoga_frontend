import React,{useState,useEffect} from 'react'
import {getEnrolment} from '../../services/enrolment'
import {HashLoader} from 'react-spinners'
import Card from '../Card/card'
import './style.css'

const EnrolledList = ({user}) => {

  const [list, setList] = useState(null)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    setFlag(true)
    getEnrolment(user).then(data=>{
      console.log(data);
      if(data["success"]==true)
      {
      let batch=data["batch"]
      setList(batch)
      }
      setFlag(false)

    })

  }, [])
  

  return (
    
    <div className='list'>

      {
        flag ?<div className="center down"><HashLoader color="#36d7b7" loading={flag} speedMultiplier={1} /></div> :

        
        list ? <Card batch={list}/> :<h2>No batch Registered!</h2>
    
      }
      
    </div>
  )
}

export default EnrolledList