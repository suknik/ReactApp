import {Route, Routes} from 'react-router-dom'
import './components/Navbar.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Astros from './components/Astros.jsx'
import About from './components/About.jsx'
import AppBar from './components/AppBar.jsx'


function App() {

  const linksData = [
    {name : 'Home', href : '/'},
    {name : 'About', href : '/about'},
    {name : 'Astros', href : '/astros'},
  ]

      
  return (
    <>
      <Navbar header='Navbar' links={linksData}/>

      {/* <AppBar /> */}

      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route 
          path='/about'
          element = {<About />}
        />
        <Route 
          path='/astros'
          element={<Astros />}
        />
      </Routes>
      
      {/* <Main />
      <Astros />       */}
    </>
  )
}

export default App
