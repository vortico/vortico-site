import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import { Cog8ToothIcon } from '@heroicons/react/24/solid'
import LinkButton from '@/components/LinkButton'

interface Product {
  icon: ReactNode
  title: string
  description: string
  textColor: string
  href?: string
}

const products: Product[] = [
  {
    icon: <Cog8ToothIcon />,
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
    href: 'https://ciclon.dev',
  },
  {
    icon: <Cog8ToothIcon />,
    title: 'Bosque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#9E744F]',
    href: 'https://bosque.dev',
  },
  {
    icon: <Cog8ToothIcon />,
    title: 'Bruma',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#00bbd5]',
    href: 'https://bruma.dev',
  },
]

interface ProductsItemProps {
  product: Product
  isSelected: boolean
  isOpen: boolean
  onClick: () => void
}

function ProductsItem({ product, isSelected, isOpen, onClick }: ProductsItemProps) {
  return (
    <li className="group relative mx-auto list-item">
      <div
        className={`h-32 w-32 cursor-pointer p-4 transition-colors duration-500 md:h-36 md:w-36 lg:h-48 lg:w-48 ${
          isOpen
            ? isSelected
              ? `bg-primary-500/70 ${product.textColor}`
              : 'bg-primary-500/30 text-primary-500'
            : `bg-primary-500/30 ${product.textColor}`
        }`}
        onClick={() => onClick()}
      >
        <div className="mx-auto h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28">{product.icon}</div>
        <h3 className="mt-2 text-center text-xl font-bold lg:text-2xl">{product.title}</h3>
      </div>
    </li>
  )
}

interface ProductDescriptionProps {
  product: Product
}

function ProductsDescription({ product }: ProductDescriptionProps) {
  return (
    <div className="py-8">
      <h4 className={`border-b-2 border-primary-400 text-xl font-bold lg:text-2xl ${product.textColor}`}>
        {product.title}
      </h4>
      <p className="mt-4 text-primary-200">{product.description}</p>
      {product.href && <LinkButton color="brand" href={product.href} text="More info" className="mt-8" />}
    </div>
  )
}

export default function Products() {
  const [selected, setSelected] = useState<number>(0)

  const selectedProduct = useMemo<Product>(() => products[selected], [selected])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onSelect = useCallback(
    (i: number) => {
      setIsOpen(i === selected ? !isOpen : true)
      setSelected(i)
    },
    [selected, setSelected, isOpen, setIsOpen]
  )

  return (
    <section id="products">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">Our Products</h2>
        <ul className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {products.map((product, i) => (
            <ProductsItem
              key={`product-${i}`}
              product={product}
              isSelected={selected === i}
              isOpen={isOpen}
              onClick={() => onSelect(i)}
            />
          ))}
        </ul>
      </div>
      <div className="mt-10 overflow-hidden bg-primary-500/70 px-4 sm:px-6 md:px-8">
        <div className={`mx-auto h-fit max-w-5xl transition-all duration-500  ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          {selectedProduct && <ProductsDescription product={selectedProduct} />}
        </div>
      </div>
    </section>
  )
}
