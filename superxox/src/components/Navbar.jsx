import React from 'react'
import logo from '../../images/super-tictactoe-logo.svg';

export default function Navbar() {
  return (
    <nav className='fixed w-full bg-blue-600'>
      <section className='flex items-center justify-between max-w-5xl p-4 mx-auto'>
        <div className='flex items-center gap-2'>
          <h1 className='text-4xl font-bold text-[#142B67] font-roboto'>Super</h1>
          <div className='w-1/3'>
            <img src={logo} className="logo" alt="super-tictactoe logo" />
          </div>
        </div>
      </section>
    </nav>
  )
}