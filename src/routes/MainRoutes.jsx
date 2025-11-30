import React from 'react'
import { Routes, Route } from 'react-router'
import App from '../App'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/*' element={<h1 className='text-blue-400'>Hello, I think you are lost!</h1>} />
    </Routes>
  )
}

export default MainRoutes