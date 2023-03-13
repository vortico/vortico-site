import React, { ReactNode } from 'react'
import { BosqueIcon, BrumaIcon, CiclonIcon, FlamaIcon, VorticoIcon } from '@/components/icons'
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconBrandTwitter, IconMail } from '@tabler/icons-react'

import Link from '@/components/Link'

interface Address {
  icon: ReactNode
  title: string
  href: string
}

const address: Address[] = [
  {
    icon: <IconMail className="h-full w-full" />,
    title: 'vortico@vortico.tech',
    href: 'mailto: vortico@vortico.tech',
  },
]

function Contact() {
  return (
    <div className="flex h-full flex-col space-y-4">
      <h2 className="text-lg font-semibold text-primary-100">Contact</h2>
      <ul className="flex h-full list-none flex-col items-start justify-between gap-y-2 text-primary-300">
        {address.map((contact, i) => (
          <li key={i}>
            <Link href={contact.href}>
              <div className="flex items-center justify-start gap-x-2">
                <div className="h-6 w-6 text-primary-300">{contact.icon}</div>
                <div>{contact.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface Expertise {
  title: string
  href: string
}

const expertise: Expertise[] = [
  { title: 'Machine Learning', href: '/#expertise-machine-learning' },
  { title: 'Software Development', href: '/#expertise-software-development' },
  { title: 'Software Architecture', href: '/#expertise-software-architecture' },
  { title: 'Cloud Solutions & Innovation', href: '/#expertise-cloud-solutions' },
  { title: 'FinTech & WealthTech', href: '/#expertise-fintech-wealthtech' },
  { title: 'Tech Training & Courses', href: '/#expertise-tech-training' },
]

function Expertise() {
  return (
    <div className="flex h-full flex-col space-y-4">
      <h2 className="text-lg font-semibold text-primary-100">Expertise</h2>
      <ul className="flex h-full list-none flex-col items-start justify-around gap-y-2 text-primary-300">
        {expertise.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface Product {
  icon: ReactNode
  title: string
  textColor: string
  href: string
}

const products: Product[] = [
  {
    icon: <BrumaIcon />,
    title: 'Bruma',
    textColor: 'text-[#00bbd5]',
    href: 'https://bruma.dev',
  },
  {
    icon: <BosqueIcon />,
    title: 'Bosque',
    textColor: 'text-[#9E744F]',
    href: 'https://bosque.dev',
  },
  {
    icon: <FlamaIcon />,
    title: 'Flama',
    textColor: 'text-[#E25822]',
    href: 'https://flama.dev',
  },
  {
    icon: <CiclonIcon />,
    title: 'Ciclon',
    textColor: 'text-[#00976E]',
    href: 'https://ciclon.dev',
  },
]

function Products() {
  return (
    <div className="flex h-full flex-col space-y-4">
      <h2 className="text-lg font-semibold text-primary-100">Products</h2>
      <ul className="flex h-full list-none flex-col items-start justify-between gap-y-2 text-primary-300">
        {products.map((product, i) => (
          <li key={i}>
            <Link className="flex items-center justify-start gap-x-1" href={product.href}>
              <div className={`h-6 w-6 ${product.textColor}`}>{product.icon}</div>
              <div className={`${product.textColor}`}>{product.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface Social {
  icon: ReactNode
  title: string
  href: string
}

const socials: Social[] = [
  {
    icon: <IconBrandGithub className="h-full w-full" />,
    title: 'GitHub',
    href: 'https://github.com/vortico/',
  },
  {
    icon: <IconBrandLinkedin className="h-full w-full" />,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/vortico-tech/',
  },
  {
    icon: <IconBrandTwitter className="h-full w-full" />,
    title: 'Twitter',
    href: 'https://twitter.com/vortico_tech',
  },
  {
    icon: <IconBrandMedium className="h-full w-full" />,
    title: 'Medium',
    href: 'https://vortico.medium.com/',
  },
]

function Social() {
  return (
    <div className="flex h-full flex-col space-y-4">
      <h2 className="text-lg font-semibold text-primary-100">Social</h2>
      <ul className="flex h-full list-none flex-col items-start justify-between gap-y-2 text-primary-300">
        {socials.map((social, i) => (
          <li key={i}>
            <Link href={social.href}>
              <div className="flex items-center justify-start gap-x-2">
                <div className="h-6 w-6 text-primary-300">{social.icon}</div>
                <div>{social.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-brand-500 bg-primary-900">
      <div className="mx-auto flex max-w-[90rem] flex-1 flex-col gap-y-16 divide-y divide-primary-700 px-4 pb-16 pt-8 text-sm leading-6 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 gap-x-20 gap-y-10 md:grid-cols-4">
          <Contact />
          <Expertise />
          <Products />
          <Social />
        </div>
        <div className="flex items-center justify-between pt-10">
          <div className="flex items-center gap-x-2">
            <VorticoIcon className="h-8 w-8 md:h-9 md:w-9" />
            <span className="text-2xl text-brand-500 md:text-3xl">Vortico</span>
          </div>
          <span className="text-primary-500">{`© 2022-${new Date().getFullYear()} Vortico`}</span>
        </div>
      </div>
    </footer>
  )
}
