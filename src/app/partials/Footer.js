import React from 'react';


export const Footer = () => {

  return (
    <footer>
      <div className="footer-copyright #00acc1 cyan darken-1">
        <div className="container">
          © {new Date().getFullYear()} Copyright Team-Undefined
              </div>
      </div>
    </footer>
  )
}