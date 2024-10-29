import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'
import FindAll from './Component/FindAll.jsx'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/getAll' element={<FindAll/>}/>
    </Routes>
  )
}

export default App