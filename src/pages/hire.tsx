import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Background from '@/components/home/Background'
import PlainLayout from '@/layouts/plain'
import React from 'react'

export default function Home() {
  return (
    <PlainLayout>
      <>
        <Background />
        <header>
          <div className="mx-auto max-w-5xl space-y-4 py-20 px-8 text-center sm:space-y-6 sm:py-24 lg:space-y-8 lg:py-48">
            <h1 className="text-4xl font-extrabold text-primary-50 sm:text-5xl lg:text-6xl">
              Elevate Your Goals to New Heights
            </h1>
            <h2 className="text-3xl font-semibold text-primary-100 sm:text-4xl lg:text-5xl">Hire Us Today!</h2>
          </div>
        </header>
        <main className="min-h-[50vh]">
          <div className="bg-white/80 py-20">
            <div className="mx-auto max-w-5xl px-8">
              <ContactForm />
            </div>
          </div>
        </main>
        <Footer />
      </>
    </PlainLayout>
  )
}
