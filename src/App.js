import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import Header from './Components/Header'
import Home from './Components/Home'
import Videos from './Components/Videos'
import Upload from './Components/Upload'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Signup from './Components/Signup'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>


      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App