import Footer from '@/components/Footer'
import Navigation from '@/components/site/navigation'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}

export default layout