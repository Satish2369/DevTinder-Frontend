
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import useCheckUser from '../utils/customhooks/useCheckUser'



const Body = () => {

   useCheckUser();

  return (
    <div className="min-h-screen flex flex-col">

    <Navbar />

    <main className="flex-grow p-2">
      <Outlet />
    </main>

   
    <Footer />
  </div>
  )
}

export default Body;
