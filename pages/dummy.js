import React from 'react'

const Dummy = () => {
  return (
    <>
      <style jsx global> 
          {`
          .hd{
            color:red;
          }
          `}
      </style>

      <span className='hd'>This is dummy</span>
    </>
  )
}

export default Dummy
