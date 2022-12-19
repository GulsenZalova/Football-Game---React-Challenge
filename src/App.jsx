import { useState } from 'react'
import Area from './components/Area'
import Task from './components/SearchTask'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Area/>
   
    </div>
  )
}

export default App
