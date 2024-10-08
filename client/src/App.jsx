
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Header from './component/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/Signin" element={<SignIn/>}/>
         <Route path="/Signup" element={<SignUp/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/project" element={<Project/>}/>
        
        
         
       </Routes>
    </BrowserRouter>
  )
}
