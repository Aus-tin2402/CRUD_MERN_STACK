import React from 'react'
import NavBar from './Pages/NavBar'
import Create from './Component/Create'
import FindAll from './Component/FindAll'
import FindByID from './Component/findByID'
import Update from './Component/Update'
import Remove from './Component/Remove'
const Home = () => {
  return (
    <>
      <NavBar />
      <Create />
      <FindAll />
      <FindByID />
      <Update />
      <Remove />
    </>
  )
}

export default Home