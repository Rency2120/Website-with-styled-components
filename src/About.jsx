import React from 'react'
import MainSection from './components/MainSection'
import { useEffect } from 'react';
import { useGlobalContext } from './Context'


function About() {
  const { updateAboutPage } = useGlobalContext();
  useEffect(() => {
    updateAboutPage()}, [])
  return (
    <div>
    <MainSection />
    </div>
  )
}

export default About
