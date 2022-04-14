import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      {/* <span className="footer-todo">TODO List App</span> */}
      <span>&copy; {new Date().getFullYear()} Copyright: Oktavian Aji Tyas Azis - 181011402092</span>
    </div>
  )
}

export default Footer