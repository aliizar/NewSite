import React, { Component } from 'react'
import loading from './loading.gif'
const spinner = ()=> {

    return (
      <div className='text-center'>
        <img className='mb-3 my-3'  src={loading} alt='loading' style={{
            height:"30px"
        }}></img>
      </div>
    )

}
export default spinner
