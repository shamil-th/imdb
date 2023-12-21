import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import LayoutCss from './Layout.module.css'
import MovieProfile from './Pages/MovieProfile/MovieProfile'
import Watchlist from './Pages/Watchlist/Watchlist'

const layout = () => {

  return (
    <>
     <div className={LayoutCss.layout}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieprofile/:id" element={<MovieProfile />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
    </>
   
  )
}

export default layout