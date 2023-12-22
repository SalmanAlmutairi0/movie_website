import React from 'react'
import './navbar.css'
import '../../index.css'
import logo from '../../img/movie.png'
export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
            <h2>Movies</h2>
        </div>

        <ul>
            <li href="#">Home</li>
            <li href="#">Explore</li>
            <li href="#">Genre</li>
            <li href="#">News</li>
            <li href="#">Movies</li>
            <li href="#">TV Shows</li>
        </ul>
    </nav>
  )
}
