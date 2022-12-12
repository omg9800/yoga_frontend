import React from 'react'
import './style.css'

const Card = ({batch}) => {
  console.log(batch);
  return (
    <div className='card'>
      <h2>Batch details</h2>
        <p className="batch_item">
        Start Time {batch?.startTime}
        </p>
        <p className="batch_item">
        End Time {batch?.endTime}
        </p>
        <p className="batch_item">
         Strengths   {batch?.strengths}
        </p>
    </div>
  )
}

export default Card