import React from 'react'
import { Routes, Route} from 'react-router-dom'
import * as Pages from './pages'

import './App.css'
import { PageWrapper } from './components'

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path='/' element={<PageWrapper/>}>
          <Route index element={<Pages.HomePage/>}/>
          <Route path="/search" element={<Pages.SearchPage/>}/>
          <Route path='/heroes' element={<Pages.HeroesPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
