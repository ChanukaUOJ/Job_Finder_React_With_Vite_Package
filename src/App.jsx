// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Jobs from './Components/JobDiv/jobs'
import Value from './Components/ValueDiv/value'
import Footer from './Components/FooterDiv/Footer'

function App() {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
