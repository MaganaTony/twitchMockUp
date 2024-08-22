import { useState } from 'react'

import Navbar from './components/Navbar'
import Aside from './components/Aside'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='flex'>
      <Aside  />
      <Body />
      </div>
    </>
  )
}

export default App
