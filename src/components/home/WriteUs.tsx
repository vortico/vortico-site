import Link from '@/components/Link'
import React from 'react'

export default function WriteUs() {
  return (
    <section id="write-us" className="bg-primary-700 dark:bg-primary-200">
      <div className="mx-auto max-w-8xl py-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-4xl font-bold text-primary-700">Let&#39;s talk about your project</h2>
        <div className="mt-10 flex justify-center gap-6 text-sm">
          <div className="h-12 w-auto">
            <Link
              href="https://github.com/vortico/"
              className="inline-flex h-full items-center rounded-full bg-brand-500 px-10 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600 dark:text-primary-100 dark:hover:bg-brand-500 dark:focus:ring-brand-400"
            >
              <span className="text-left text-lg font-semibold">Write us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
