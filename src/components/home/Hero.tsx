import React from 'react'
import LinkButton from '@/components/LinkButton'

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-5xl py-20 px-8 text-center sm:py-24 lg:py-48">
        <h1 className="text-4xl font-extrabold text-primary-50 sm:text-5xl lg:text-6xl">Your goals, elevated</h1>
        <p className="mx-auto mt-10 max-w-3xl text-xl text-primary-200 sm:text-2xl">
          <span className="font-bold text-primary-100">Vortico</span> is a company specialised in software development
          which helps businesses enhance and expand their AI and technology capabilities.
          <br />
        </p>
        {/*<p className="mx-auto mt-10 max-w-3xl text-lg">
          We&apos;re a team of AI and technology consultants who are passionate about helping businesses like yours
          succeed. Whether you&apos;re just starting out and looking to get a foothold in the industry, or you&apos;re
          an established company looking to take your performance to the next level, we&apos;re here to help. With a
          focus on delivering high quality, high performance solutions, we offer a range of services that can be
          customised to fit your needs. From custom software development to data analysis and machine learning strategy,
          we&apos;re here to support you every step of the way. Let&apos;s work together to make your business the best
          it can be!
        </p>*/}
        <div className="mt-20 h-12 w-auto">
          <LinkButton className="px-10 text-lg" color="brand" text="About us" href="https://github.com/vortico/" />
        </div>
      </section>
    </>
  )
}
