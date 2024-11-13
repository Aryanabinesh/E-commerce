import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminsidebar from './Adminsidebar'
import AdminHeader from './AdminHeader'

const Adminlayout = () => {
  return (
    <div className='flex min-h-screen w-full'>

          {/* slidebar */}
          <Adminsidebar/>
          <div className='flex flex-1 flex-col'>

            {/* admin header */}
            <AdminHeader/>
            <main className='flex-1 flex bg-muted/40 p-4 md:px-6'>
            <h1>hello</h1>
              <Outlet/>
            </main>

          </div>
    </div>
  )
}

export default Adminlayout