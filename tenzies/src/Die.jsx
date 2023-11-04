import { useState } from 'react'

export default function Die({ id, value, isHeld, hold }) {
  const styles = {backgroundColor: isHeld ? "#59E391" : "white"}

  return (
    <div 
      onClick={() => hold(id)} 
      style={styles}
      className='w-10 h-10 sm:w-14 sm:h-14 shadow rounded flex items-center justify-center font-sans text-2xl font-bold'
    >
      {value}
    </div>
  )
}
