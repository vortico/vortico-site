import React from 'react'
import { LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function MissionVision() {
  return (
    <section id="mission-vision">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="mb-10 flex sm:mb-16 lg:mb-20">
          <div className="basis-2/3">
            <h2 className="text-2xl font-bold lg:text-3xl">
              Transform the ML arena by creating an environment where the development and deployment of products is as
              simple, straightforward, and resilient as possible.
            </h2>
          </div>
          <div className="flex basis-1/3 items-center justify-center">
            <div className="flex h-20 w-20 flex-none overflow-hidden rounded-full p-[0.1875rem] shadow ring-1 ring-primary-900/30 dark:bg-brand-600 lg:h-28 lg:w-28">
              <div className="flex flex-1 items-center justify-center rounded-full bg-brand-500/90 p-3 text-primary-100 dark:text-brand-600 lg:p-4">
                <LightBulbIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex basis-1/3 items-center justify-center">
            <div className="flex h-20 w-20 flex-none overflow-hidden rounded-full p-[0.1875rem] shadow ring-1 ring-primary-900/30 dark:bg-brand-600 lg:h-28 lg:w-28">
              <div className="flex flex-1 items-center justify-center rounded-full bg-brand-500/90 p-3 text-primary-100 dark:text-brand-600 lg:p-4">
                <RocketLaunchIcon />
              </div>
            </div>
          </div>
          <div className="basis-2/3">
            <p className="text-lg">Our mission is to simplify the building and deployment of ML solutions by:</p>
            <ul className="mt-4 list-inside list-disc space-y-4">
              <li>
                Providing the ML community with a comprehensive set of{' '}
                <span className="text-brand-500">top-notch libraries and services</span> that serve as the cornerstone
                of any ML project
              </li>
              <li>
                Offering <span className="text-brand-500">specialized training</span> and technical material to equip
                our users with the knowledge and skills they need to successfully build robust ML products, as well as
                broader Data Engineering and Software Engineering principles
              </li>
              <li>
                Utilizing a <span className="text-brand-500">proprietary consulting squad</span> that is capable of
                elevating any ML project to new heights through their expertise and innovative solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
