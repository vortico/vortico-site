import React, { ReactNode } from 'react'
import {
  AcademicCapIcon,
  BanknotesIcon,
  CloudIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CreditCardIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'

interface ExpertiseItemProps {
  icon: ReactNode
  title: string
  description: string
}

function ExpertiseItem({ icon, title, description }: ExpertiseItemProps) {
  return (
    <li className="group list-item">
      <span className="absolute -left-4 -ml-px flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 ring-2 ring-white ring-brand-600">
        {icon}
      </span>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 max-h-full overflow-hidden transition-all duration-500 md:max-h-0 md:group-hover:max-h-screen">
        {description}
      </p>
    </li>
  )
}

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">Expertise</h2>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue
          consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis
          id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.
        </p>
        <ul className="relative mt-8 ml-4 list-inside space-y-6 border-l-2 border-brand-500 py-4 pl-8">
          <ExpertiseItem
            icon={<CpuChipIcon className="h-6 w-6 text-brand-600" />}
            title="Machine Learning"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien."
          />
          <ExpertiseItem
            icon={<CodeBracketIcon className="h-6 w-6 text-brand-600" />}
            title="Software Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien."
          />
          <ExpertiseItem
            icon={<CloudIcon className="h-6 w-6 text-brand-600" />}
            title="Cloud Solutions and Innovation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien."
          />
          <ExpertiseItem
            icon={<BanknotesIcon className="h-6 w-6 text-brand-600" />}
            title="WealthTech"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien."
          />
          <ExpertiseItem
            icon={<CreditCardIcon className="h-6 w-6 text-brand-600" />}
            title="FinTech"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien."
          />
          <ExpertiseItem
            icon={<AcademicCapIcon className="h-6 w-6 text-brand-600" />}
            title="Tech Training & Courses"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien."
          />
          <ExpertiseItem
            icon={<PencilSquareIcon className="h-6 w-6 text-brand-600" />}
            title="Software Architecture"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien."
          />
        </ul>
      </div>
    </section>
  )
}
