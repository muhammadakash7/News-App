import React from 'react'
import loading from './loading.gif.gif'

const  Spinner = ()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="nothing" style={{height:"30px", width:"30px"}}/>
      </div>
    )
  }

export default Spinner
