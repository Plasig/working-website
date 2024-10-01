import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import Sidebar from '@/components/shared/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">

      <Header/>
      <div className='flex flex-row'>
        <div>
          <Sidebar />
        </div>
        <div className='w-screen'>
          <div className='py-14 px-8 text-xl'>
            {children}
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Layout