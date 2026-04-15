import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar'

import { Routes,Route } from 'react-router-dom'
import List from './Pages/List/List'
import Order from './Pages/Order/Order'
import Add from './Pages/Add/Add'
import Sidebar from './Components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify'
import { toast} from 'react-toastify'

// >>> Added for Edit functionality
 import EditFood from "./Pages/EditFood/EditFood";
// <<< Added for Edit functionality




const App = () => {
  const url="http://localhost:4000"
  return (
    <div>
  
      <Navbar />
       <p className='adminName'>Admin Pannel</p> 
      <hr />
      <div className='app-content'>
       <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />}/>
          <Route path='/list' element={<List  url={url} />}/>
          <Route path='/order' element={<Order  url={url} />}/>
          {/* >>> Added for Edit functionality */}
         <Route path="/edit" element={<EditFood />} /> 
        {/* <<< Added for Edit functionality */}
        </Routes>
        

      </div>
    </div>
  )
}

export default App