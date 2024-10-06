import { Button, Navbar,    } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import{AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar className='border-b-2 flex items-center px-4'>
  <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white mr-5'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
      CONTENT-
    </span>
    Blog
  </Link>
  
  <form className='hidden md:flex items-center relative py-2 '>
    <input 
      type='text'
      placeholder='search...'
      className='border rounded-lg focus:outline-none px-4 py-2' 
    />
    <AiOutlineSearch style={{ fontSize: '24px' }} className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
  </form>
  
  <Button className='md:hidden w-12 h-10 rounded-md' color='gray'>
    <AiOutlineSearch style={{ fontSize: '24px' }} />
  </Button>


  <div className='flex gap-2 md:order-2'>
     <Button className='w-12 h-10 inline'>
     <FaMoon />
    </Button>

        <Link to='/sign-in'>
  <button className='border-2 border-purple-600 text-black bg-transparent rounded-md px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white'>
    Sign In
  </button>
</Link>

    
  </div>
</Navbar>



  )
}
