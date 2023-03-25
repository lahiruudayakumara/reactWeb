import React from 'react'
import About from '../about/About'
import Branding from '../home/Branding'
import Home from '../home/Home'
import Servicess from '../servicess/Servicess'
import Skill from '../servicess/Skill'
import Wrapper from '../servicess/Wrapper'
import WrapperOne from '../servicess/WrapperOne'
import Work from '../work/Work'

const HomePages = () => {
  return (
    <>
      <Home/>
      <Branding/>
      <About/>
      <Servicess/>
      <Wrapper/>
      <Skill/>
      <WrapperOne/>
      <Work/>
    </>
  )
}

export default HomePages
