import React from 'react'
import imageDesktop from "../assets/images/bg-header-desktop.svg"
import imageMobile from "../assets/images/bg-header-mobile.svg"

function Header() {
  return (
    <div className="w-full h-[150px] bg-[#5DA5A4] overflow-hidden">
      <picture>
        <source media="(max-width: 425px)" srcSet={imageMobile} />
        <img
          src={imageDesktop}
          alt="Header"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  )
}

export default Header