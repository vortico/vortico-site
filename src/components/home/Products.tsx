import React, { ReactNode } from 'react'
import { Cog8ToothIcon, FireIcon } from '@heroicons/react/24/solid'
import Link from '@/components/Link'

interface Product {
  icon: ReactNode
  title: string
  description: string
  textColor: string
  href?: string
}

const products: Product[] = [
  {
    icon: <FireIcon />,
    title: 'Flama',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#E25822]',
    href: 'https://flama.dev',
  },
  {
    icon: <Cog8ToothIcon />,
    title: 'Ciclon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#00976E]',
  },
  {
    icon: <Cog8ToothIcon />,
    title: 'Bosque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#9E744F]',
  },
  {
    icon: <Cog8ToothIcon />,
    title: 'Bruma',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#00bbd5]',
  },
]

interface TooltipProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
  textColor: string
}

function Tooltip({ title, description, textColor }: TooltipProps) {
  return (
    <div className="absolute left-1/2 -bottom-4 z-20 hidden -translate-x-1/2 translate-y-full bg-primary-200 p-3 text-left text-sm after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-primary-200 after:content-[''] md:group-hover:block">
      <div className="relative divide-y divide-solid divide-primary-400">
        <h4 className={`text-xl font-bold lg:text-2xl ${textColor}`}>{title}</h4>
        <p className="w-max max-w-[10rem] pt-4 text-primary-800 lg:max-w-[14rem]">{description}</p>
      </div>
    </div>
  )
}

interface ProductsItemProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
  textColor: string
}

function ProductsItem({ icon, title, description, href, textColor }: ProductsItemProps) {
  return (
    <li className="group relative mx-auto list-item">
      <Link
        className={`block h-32 w-32 bg-primary-500/30 p-4 md:h-36 md:w-36 lg:h-48 lg:w-48 ${
          href ? `${textColor} cursor-pointer` : 'text-primary-500'
        }`}
        href={href}
      >
        <div className="mx-auto h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28">{icon}</div>
        <h3 className="mt-2 text-center text-xl font-bold lg:text-2xl">{title}</h3>
      </Link>
      <Tooltip icon={icon} title={title} description={description} href={href} textColor={textColor} />
    </li>
  )
}

export default function Products() {
  return (
    <section id="products">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">Our Products</h2>
        <ul className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {products.map(({ icon, title, description, textColor, href }) => (
            <ProductsItem
              key={title}
              icon={icon}
              title={title}
              description={description}
              textColor={textColor}
              href={href}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
