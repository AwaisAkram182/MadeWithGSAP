import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='h-18c fixed w-full bg-[#dee4e1] h-17   flex  items-center'>
        <div className='fontstyle flex justify-between w-full text-3xl tracking-tighter font-light px-10 max-sm:px-5'>
            <Link to="/">Made With Gsap</Link>
           <Link to="/Faq">FAQ</Link>
        </div>
   </div>
   <hr className='opacity-40' />
   </>
  )
}

export default Navbar
