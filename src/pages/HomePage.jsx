import React from 'react'
import MainSection from '../components/MainSection'
import AttractionsList from '../components/AttractionsList'

const HomePage = () => {
  return (
    <>
    <MainSection />
    <AttractionsList isHome={true} />
    </>
  )
}

export default HomePage