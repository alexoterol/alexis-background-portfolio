import { useState } from 'react'
import './App.css'

import Header from './lib/components/Header'
import MainContent from './lib/components/MainContent'
import Sidebar from './lib/components/Sidebar'


function App() {

  return (
    <>
      <img src="./src/lib/assets/images/frame.png" className='frame' alt="" />
      <Header/>
      <Sidebar />
      <MainContent/>
    </>
  )
}

export default App
