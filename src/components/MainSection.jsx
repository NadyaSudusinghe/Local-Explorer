import React from 'react'

const MainSection = () => {
  return (
    <section className='bg-red-600 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Explore your amazing city!
          </h1>
          <p className='my-4 text-xl text-white'>Find museums, art galleries, nature parks, etc. to visit</p>
        </div>
      </div>
    </section>
  )
}

export default MainSection