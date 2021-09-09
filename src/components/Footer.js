import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      {/* <span className="footer-todo">TODO List App</span> */}
      <span>&copy; {new Date().getFullYear()} Copyright: Kampus Merdeka x Glints - Mini Project - Group 2</span>
    </div>
  )
}

export default Footer