import React, { useEffect } from 'react'
import MainSection from './components/MainSection'
import { useGlobalContext } from './Context'
import Services from './Services'
import Contact from './Contact'

function Home() {
  const { updateHomePage } = useGlobalContext();
  useEffect(() =>  { updateHomePage() }, [])
  
  return (

    <>
      <MainSection />
      <Services/>
      <Contact/>
    </>
  )
}

export default Home
