import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Context from './pages/Context'
import Productlist from './pages/Productlist'
import AdminPanel from './pages/AdminPanel'
import SingleProduct from './pages/SingleProduct'
import ManyProduct from './pages/ManyProduct'
import SearchPage from './pages/SearchPage'
import Support from './pages/Support'


function App() {
  return (
    <div>
      <Context>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/context' element={<Context/>}></Route>
          <Route path='/productlist' element={<Productlist/>}></Route>
          <Route path='/adminpanel' element={<AdminPanel/>}></Route>
          <Route path='/singleproduct' element={<SingleProduct/>}></Route>
          <Route path='/manyproduct' element={<ManyProduct/>}></Route>
          <Route path='/searchpage' element={<SearchPage/>}></Route>
          <Route path='/supportpage' element={<Support/>}></Route>
        </Routes>
      </BrowserRouter>
      </Context>
    </div>
  )
}

export default App