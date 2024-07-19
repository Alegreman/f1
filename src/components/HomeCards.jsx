import React from 'react'
import Cards from './Cards'

const HomeCards = () => {
  return (
    // grid-flow-col
    <section className='bg-gray-50 grid gap-4 grid-cols-3 px-4 py-4 rounded-lg'>
        <Cards />
    </section>
  )
}

export default HomeCards