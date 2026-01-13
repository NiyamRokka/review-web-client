import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/login'
import Signup from './pages/register'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/landing'
import AboutPage from './pages/about'
function App() {
  return (
    <main className='h-full w-full'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='*' element={<h1 className='italic text-red-500'>Page Not Found</h1>}/>
        </Routes>
      </Router>
      <Toaster
      position='top-center'
      reverseOrder={false}
      />
    </main>
  )
}

export default App
