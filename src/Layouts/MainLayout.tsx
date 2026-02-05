import Footer from '@/components/shear/Footer'
import Navbar from '@/components/shear/Navbar'
import { Outlet } from 'react-router'


const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout