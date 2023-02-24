import React, { ReactNode } from 'react'
import { IconBulb, IconTargetArrow } from '@tabler/icons-react'

interface IconProps {
  icon: ReactNode
}

function Icon({ icon }: IconProps) {
  return (
    <div className="flex h-20 w-20 flex-none overflow-hidden rounded-full bg-brand-800 p-[0.1875rem] shadow ring-1 ring-primary-800/30 lg:h-28 lg:w-28">
      <div className="flex flex-1 items-center justify-center rounded-full bg-brand-500 p-3 text-brand-800 lg:p-4">
        {icon}
      </div>
    </div>
  )
}

export default function MissionVision() {
  return (
    <section id="mission-vision">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">The future of Machine Learning development and deployment</h2>
        <div className="mt-8 flex flex-col gap-y-16">
          <div className="flex flex-1 flex-col gap-y-4 md:flex-row">
            <div className="md:basis-3/4">
              <p className="text-lg">
                Transform the ML arena by creating an environment where the development and deployment of products is as
                simple, straightforward, and resilient as possible.
              </p>
            </div>
            <div className="flex items-center justify-center md:basis-1/4">
              <Icon icon={<IconBulb className="h-full w-full" />} />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-y-4 md:flex-row">
            <div className="space-y-4 md:basis-3/4">
              <p className="text-lg">Our mission is to simplify the building and deployment of ML solutions by:</p>
              <ul className="mt-4 list-inside list-disc space-y-4">
                <li>
                  Providing the ML community with a comprehensive set of{' '}
                  <span className="text-brand-500">top-notch libraries and services</span> that serve as the cornerstone
                  of any ML project
                </li>
                <li>
                  Offering <span className="text-brand-500">specialised training</span> and technical material to equip
                  our users with the knowledge and skills they need to successfully build robust ML products, as well as
                  broader Data Engineering and Software Engineering principles
                </li>
                <li>
                  Utilising a <span className="text-brand-500">proprietary consulting squad</span> that is capable of
                  elevating any ML project to new heights through their expertise and innovative solutions.
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center md:order-first md:basis-1/4">
              <Icon icon={<IconTargetArrow className="h-full w-full" />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
