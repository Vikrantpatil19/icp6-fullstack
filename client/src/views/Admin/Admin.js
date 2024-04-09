import React from 'react'
import AUsers from './components/AUsers'
import ABookings from './components/ABookings'
import AContactUs from './components/AContactUs'

export default function Admin() {
  return (
    <>
    <h1 className='mb-5 py-5 text-center '>Admin Page</h1>
    <hr></hr>
    <AUsers/>
    <ABookings/>
    <AContactUs/>
    </>
  )
}
