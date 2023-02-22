import React from 'react'
import LinkButton from '@/components/LinkButton'

export default function WriteUs() {
  return (
    <section id="write-us" className="bg-primary-50">
      <div className="mx-auto max-w-8xl py-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-4xl font-bold text-primary-700">Let&#39;s talk about your project</h2>
        <div className="mt-10 flex justify-center gap-6 text-sm">
          <div className="h-12 w-auto">
            <LinkButton className="px-10 text-xl" color="brand" href="https://github.com/vortico/" text="Write us" />
          </div>
        </div>
      </div>
    </section>
  )
}
