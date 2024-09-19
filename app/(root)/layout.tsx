import Sidebar from '@/components/shared/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />

      <div>
        <div >
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout