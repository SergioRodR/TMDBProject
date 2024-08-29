import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import NavBarComponent from './components/NavBarComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarComponent />
        <RoutesIndex />
      </BrowserRouter>
      
    </>
  )
}

export default App
