import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='app'>
      <nav id="navbar">
        <h2>
          <Link to='/'>MoviesLib</Link>
        </h2>

          
        <Link to='/movie/1'>Movie</Link>
        
        <Link to='/search'>Search</Link>

      </nav>
      <h2>FILM CATALOG</h2>
      <Outlet></Outlet>
    </div>
  )
     
}

export default App
