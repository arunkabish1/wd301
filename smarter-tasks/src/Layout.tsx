import Header from './components/Header';
import { Outlet } from "react-router-dom"

const Layout = () => {

  return (
    <>
      <Header />
      <main className="px-8">
      <Outlet />
        {/* We want route specific content to show up in this position */}
      </main>
    </>
  )
}
export default Layout;