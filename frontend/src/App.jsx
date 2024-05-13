//App.jsx
import Homepage from './Components/Homepage'
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import Login from './Components/Login'
import CConceptsPage from './Components/CConceptsPage';
import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/c-concepts-page" element={<CConceptsPage />} />
      </Routes>
      
    </>
  )
}

export default App
