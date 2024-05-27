import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Ringan from './Components/Ringan'
import Berat from './Components/Berat'
import Loginhome from './Components/Loginhome'
import Login1 from './Components/Login1'
import Daftar from './Components/Daftar'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Login2 from './Components/Login2'
import Umkmprofile from './Components/Umkmprofile'
import Upload from './Components/Upload'
import Dashboard from './Components/Dashboard'
import ProfilUser from './Components/ProfilUser'
import Detailbika from './Components/Detailbika'
import Detailmie from './Components/Detailmie'
import Detailumkm from './Components/Detailumkm'
import About from './Components/About'
import Peta from './Components/Maps'
function App() {
  return (
    <BrowserRouter>
//     <Navbar/>
//     <div>
//       <Routes>
// <Route path='/' element={<Home/>}/>
<Route path='/Menu' element={<Menu/>}/>
<Route path='/Loginhome' element={<Loginhome/>}/>
<Route path='/Berat' element={<Berat/>} />
<Route path='/Ringan' element={<Ringan/>} />
<Route path='/Login1' element={<Login1/>} />
<Route path='/Daftar' element={<Daftar/>} />
<Route path='/Login2' element={<Login2/>} />
<Route path='/Umkmprofile' element={<Umkmprofile/>} />
<Route path='/Upload' element={<Upload/>} />
<Route path='/Dashboard' element={<Dashboard/>} />
<Route path='/ProfilUser' element={<ProfilUser/>} />
<Route path='/Detailbika' element={<Detailbika/>} />
<Route path='/Detailmie' element={<Detailmie/>} />
<Route path='/Detailumkm' element={<Detailumkm/>} />
<Route path='/About' element={<About/>} />
<Route path='/Maps' element={<Peta/>} />
      </Routes>
     </div>
    </BrowserRouter>

  )
}

export default App
