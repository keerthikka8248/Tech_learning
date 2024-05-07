//App.jsx
import Homepage from './Components/Homepage'
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import Login from './Components/Login'


import './App.css'
function App() {
  

  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
      </Routes>
      
    </>
  )
}

export default App
