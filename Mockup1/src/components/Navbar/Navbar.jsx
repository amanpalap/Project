import React from 'react'
import Logo from '../images/Logo.png'
import Logo1 from '../images/secure.png'
import Logo2 from '../images/mic.png'
import Logo3 from '../images/play.png'
import Logo4 from '../images/apple.png'

function Navbar() {
  return (
      <header className='flex flex-wrap justify-evenly items-center bg-blue-950'>
        <div className='flex flex-wrap items-center justify-center'>
            <div className='w-48 mr-7 block my-1'>
                <img src={Logo} alt="" />
            </div>
            <div className='w-7 mr-5 block'>
                <img src={Logo1} alt="" />
            </div>
            <div className='flex flex-wrap text-center sticky items-center justify-center text-white'>
                <p className='px-2'>Premium+</p>
                <p className='px-2'>Blogs</p>
                <img className='ml-4' src={Logo2} alt="" />
                <p className='px-2' >Podcast</p>
            </div>
        </div>
        <div className='flex flex-wrap text-white items-center justify-center'>
            <div className='w-8 mr-7 block my-1'>
                <img src={Logo3} alt="" />
            </div>
            <div className='w-8 mr-7 block my-1'>
                <img src={Logo4} alt="" />
            </div>
            <div>
            <button className='bg-green-800 w-24 mr-4 text-white rounded-xl py-1.5 px-7'> 
                    Login
                </button>
                <button className='bg-white w-24 text-black rounded-xl py-1.5 px-4'> 
                    Sign Up
                </button>
            </div>
        </div>
      </header>
  )
}

export default Navbar
