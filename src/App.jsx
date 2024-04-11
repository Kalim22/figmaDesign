import React, { useState } from 'react'
import Sidemenu from './components/sidemenu/Sidemenu'
import Homepage from './pages/homepage/Homepage'
import Contact from './pages/contact/Contact'
import { Routes, Route } from 'react-router-dom'
import Message from './pages/message/Message'

function App() {

  const Home = () => {
    return (
      <div style={{ display: 'flex', width: '100%' }}>
        <Sidemenu />
        <Homepage />
      </div>
    )
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/message' element={<Message />} />
      </Routes>
    </main>
  )
}

export default App
