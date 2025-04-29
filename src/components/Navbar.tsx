import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center items-center p-4 bg-white shadow-md'>
      <div className='mr-4'>
        <a href="#">
            <img src="https://images.apollo247.in/images/icons/apollo247.svg" alt="logo" />
        </a>
      </div>
      <div className='mr-4'>Select</div>
      <div className='flex items-center justify-center'>        
        <div className='mr-4 w-40'>SEARCH</div>
        <div>Login</div>
      </div>
    </div>
  )
}

export default Navbar
