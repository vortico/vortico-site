import Link from '@/components/Link'
import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-8 pt-20 text-center sm:pt-24 lg:pt-32">
        <h1 className="text-4xl font-extrabold text-primary-700 dark:text-primary-200 sm:text-5xl lg:text-6xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p className="mx-auto mt-10 max-w-3xl text-lg">
          In tempor tortor ut dui viverra aliquam. Fusce lacus justo, sollicitudin et eleifend vitae, bibendum a magna.
          Sed id mi sit amet ex ultrices auctor vel vestibulum metus.
          <br />
          In ligula odio, elementum at velit at, sollicitudin porttitor lorem 🌬🍃
        </p>
        <div className="mt-10 flex justify-center gap-6 text-sm">
          <div className="h-12 w-auto">
            <Link
              href="https://github.com/vortice-tech"
              className="inline-flex h-full items-center rounded-full bg-brand-500 px-10 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 dark:bg-brand-600 dark:text-primary-100 dark:hover:bg-brand-500 dark:focus:ring-brand-300"
            >
              <span className="text-left text-lg font-semibold">Get Started</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
