
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Room from './components/Homepage/Room/Room'
import githubfooter from './components/githubfooter'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/room/:roomId" element={<Room/>}/>
     
     
    </Routes>
    
    
  
  )
}

export default App
