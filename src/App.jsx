import { useState } from 'react'

import Navbar from './components/Navbar'
import Aside from './components/Aside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Aside />
    </>
  )
}

export default App
