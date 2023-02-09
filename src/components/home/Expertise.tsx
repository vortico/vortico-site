import React, { ReactNode } from 'react'
import { BanknotesIcon } from '@heroicons/react/24/solid'

interface ExpertiseItemProps {
  icon: ReactNode
  title: string
  description: string
}

function ExpertiseItem({ icon, title, description }: ExpertiseItemProps) {
  return (
    <li className="group list-item">
      <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 ring-2 ring-white ring-brand-600">
        {icon}
      </span>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-screen">{description}</p>
    </li>
  )
}

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <ul className="relative list-inside space-y-6 border-l-2 border-brand-500 py-8 pl-8">
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="Machine Learning"
            description="That's the description"
          />
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="Software Development"
            description="That's the description"
          />
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="Cloud Solutions and Innovation"
            description="That's the description"
          />
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="WealthTech"
            description="That's the description"
          />
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="FinTech"
            description="That's the description"
          />
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="Tech Training & Courses"
            description="That's the description"
          />
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="Software Architecture"
            description="That's the description"
          />
        </ul>
      </div>
    </section>
  )
}
