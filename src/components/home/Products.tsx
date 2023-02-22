import React, { ReactNode, useCallback, useMemo, useState } from 'react'
import LinkButton from '@/components/LinkButton'
import { BosqueIcon, BrumaIcon, CiclonIcon, FlamaIcon } from '@/components/icons'

interface Product {
  icon: ReactNode
  title: string
  description: string
  textColor: string
  href?: string
}

const products: Product[] = [
  {
    icon: <FlamaIcon />,
    title: 'Flama',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#E25822]',
    href: 'https://flama.dev',
  },
  {
    icon: <CiclonIcon />,
    title: 'Ciclon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#00976E]',
    href: 'https://ciclon.dev',
  },
  {
    icon: <BosqueIcon />,
    title: 'Bosque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet felis quis mi congue consectetur. Morbi a magna viverra, fermentum lacus a, mollis sapien. Nulla orci felis, porta sit amet iaculis id, porttitor eget mauris. Curabitur odio neque, molestie id nibh id, semper tincidunt sapien.',
    textColor: 'text-[#9E744F]',
    href: 'https://bosque.dev',
  },
  {
    icon: <BrumaIcon />,
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
    <li
      className={`group block flex list-item h-36 w-full items-center justify-center transition-all duration-500 md:h-40 md:w-40 lg:h-52 lg:w-52 ${
        isOpen ? (isSelected ? 'scale-110' : 'scale-90') : 'scale-100'
      }`}
    >
      <div
        className={`flex h-full cursor-pointer flex-col items-center justify-center gap-2 transition-all duration-500 ${
          isOpen
            ? isSelected
              ? `bg-primary-400/60 ${product.textColor}`
              : 'bg-primary-400/20 text-primary-400'
            : `bg-primary-400/40 ${product.textColor}`
        }`}
        onClick={() => onClick()}
      >
        <div className="h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28">{product.icon}</div>
        <h3 className="text-xl font-bold lg:text-2xl">{product.title}</h3>
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
      <p className="mt-4 text-primary-100">{product.description}</p>
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
        <ul className="mx-4 mt-8 flex flex-col items-center justify-around gap-8 md:flex-row">
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
      <div className="mt-10 overflow-hidden bg-primary-400/60 px-4 sm:px-6 md:px-8">
        <div className={`mx-auto h-fit max-w-5xl transition-all duration-500  ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          {selectedProduct && <ProductsDescription product={selectedProduct} />}
        </div>
      </div>
    </section>
  )
}
