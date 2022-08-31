import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from './Contact'
import Home from './Home'
import Layout from './Layout'
import NoPage from './NoPage'

function Router() {
  return (
    <div>
      <h1>Hello world</h1>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='Contact' elements={<Contact />} />
                <Route path='Home' element={<Home/>}/>
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
