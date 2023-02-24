import PlainLayout from '@/layouts/plain'
import React from 'react'
import Footer from '@/components/Footer'
import Background from '@/components/home/Background'

export default function Home() {
  return (
    <PlainLayout>
      <>
        <Background />
        <header>
          <div className="mx-auto max-w-5xl py-20 px-8 text-center sm:py-24 lg:py-48">
            <h1 className="text-4xl font-extrabold text-primary-50 sm:text-5xl lg:text-6xl">Our team</h1>
            <p className="text-md mx-auto mt-10 max-w-5xl text-primary-300 sm:text-xl">
              We are a team of AI and technology consultants who are passionate about helping businesses like yours
              succeed. Whether you&apos;re just starting out and looking to get a foothold in the industry, or
              you&apos;re an established company looking to take your performance to the next level, we&apos;re here to
              help. With a focus on delivering high quality, high performance solutions, we offer a range of services
              that can be customised to fit your needs. From custom software development to data analysis and machine
              learning strategy, we&apos;re here to support you every step of the way. Let&apos;s work together to make
              your business the best it can be!
              <br />
            </p>
          </div>
        </header>
        <main className="space-y-20 bg-primary-900/50 py-20 sm:space-y-32 sm:py-32 md:space-y-40 md:py-40">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary-100">People</h1>
            <h2 className="text-2xl font-bold text-primary-200">Meet the team</h2>
          </div>
        </main>
        <Footer />
      </>
    </PlainLayout>
  )
}
