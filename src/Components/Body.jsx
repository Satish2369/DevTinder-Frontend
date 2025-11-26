
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import useCheckUser from '../utils/customhooks/useCheckUser'



const Body = () => {

   useCheckUser();

  return (
    <div className="min-h-screen flex flex-col " style={{ background: 'linear-gradient(135deg, rgba(26,10,26,0.95) 0%, rgba(45,27,61,0.95) 50%, rgba(26,10,46,0.95) 100%)' }}>

    <Navbar />

    <main className="flex-grow min-h-screen">
      <Outlet />
    </main>

   
    <Footer />
  </div>
  )
}

export default Body;
