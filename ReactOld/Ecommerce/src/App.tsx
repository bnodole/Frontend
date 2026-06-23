import React from 'react'
import { Navbar } from './assets/components/Navbar/Navbar'
import Content1 from './assets/components/Contents/Content1'
import Features from './assets/components/Features/Features'
import Contact from './assets/components/Contact/Contact'

export const App = () => {
  return (
    <>
      <Navbar />
      <Content1 />
      <Features/>
      <Contact/>
    </>
  )
}

export default App