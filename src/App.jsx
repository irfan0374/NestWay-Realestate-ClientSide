import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseRoute from './Routes/UseRoute';
import AdminRoute from './Routes/adminRoute';
import PartnerRoute from './Routes/partnerRoute';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
   <Router>
    <ToastContainer/>
    <Routes>
      <Route path ='/*'element={<UseRoute/>}/>
      <Route path ='/admin/*'element={<AdminRoute/>}/>
      <Route path ='/partner/*'element={<PartnerRoute/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App
