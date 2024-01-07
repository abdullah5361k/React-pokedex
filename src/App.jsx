import { Link } from 'react-router-dom'
import './App.css'
import CustomRoutes from './routes/CustomRoutes'

function App() {

  return (
    <>
      <Link to={"/"}>
        <h1 className="poke-header">Pokedex</h1>
      </Link>
      <CustomRoutes />
    </>
  )
}

export default App
