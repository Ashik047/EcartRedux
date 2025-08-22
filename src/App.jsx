import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import View from "./pages/View"
import WishList from "./pages/WishList"
import PageNotFound from "./pages/PageNotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/wishlist' element={<WishList />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/:id/view' element={<View />}></Route>
        <Route path='/*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
