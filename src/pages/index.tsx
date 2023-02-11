import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import PlainLayout from '@/layouts/plain'
import React from 'react'
import Background from '@/components/home/Background'
import WriteUs from '@/components/home/WriteUs'
import MissionVision from '@/components/home/MissionVision'
import Expertise from '@/components/home/Expertise'
import Products from '@/components/home/Products'

export default function Home() {
  return (
    <PlainLayout>
      <>
        <Background />
        <header>
          <Hero />
        </header>
        <main className="space-y-20 bg-primary-900/50 py-20 sm:space-y-32 sm:py-32 md:space-y-40 md:py-40">
          <MissionVision />
          <Expertise />
          <Products />
          <WriteUs />
        </main>
        <Footer />
      </>
    </PlainLayout>
  )
}
