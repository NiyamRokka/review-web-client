import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/login'
import Signup from './pages/register'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/landing'
import AboutPage from './pages/about'
import ReviewDetailPage from './pages/review'
import WriteReviewPage from './pages/write-review'
import CategoriesPage from './pages/categories'
function App() {
  return (
    <main className='h-full w-full'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path="/review/:id" element={<ReviewDetailPage/>} />
          <Route path='/write-review' element={<WriteReviewPage/>}/>
          <Route path='/categories' element={<CategoriesPage/>}/>
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
