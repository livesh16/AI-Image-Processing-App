import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar /> {/* Sidebar will be displayed for large screen only, while MobileNav will be hidden for large screens only. So they won't appear together */}
      <MobileNav />
      <div className='root-container'>
          <div className='wrapper'>
              {children}
          </div>
      </div>
    </main>
  )
}

export default Layout