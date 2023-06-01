import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">CyberSoft</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}} aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/glasses" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}}>BT Thử Kính</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/shoeshop" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}}> Shoe Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark': 'nav-link'} to="/react-form" style={({isActive}) => isActive ? {border:'1px solid orange'}:{}}> React Form</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
