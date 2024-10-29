import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Css/navbar.css'

const NavBar = () => {
  const OnNavClick = (e) => {
    const display = document.querySelector('aside')
    display.classList.toggle('open')
  }

  return (
    <>
      <nav>
        <section className="logo">
          <h1>Crud - Mern Stack</h1>
        </section>
        <aside>
          <AnchorLink className='links' href='#create'>Create</AnchorLink>
          <AnchorLink className='links' href='#findAll'>FindAll</AnchorLink>
          <AnchorLink className='links' href='#id'>FindOne</AnchorLink>
          <AnchorLink className='links' href='#update'>Update</AnchorLink>
          <AnchorLink className='links' href='#remove'>Remove</AnchorLink>
        </aside>
        <button className='hamburger' onClick={(e)=>OnNavClick(e)}>Click</button>
      </nav>
    </>
  )
}

export default NavBar
