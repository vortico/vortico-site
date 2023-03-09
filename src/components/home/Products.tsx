import React, { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
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
    icon: <BrumaIcon />,
    title: 'Bruma',
    description:
      'Bruma is a data-science framework that has been specifically designed to simplify and ' +
      'standardise the training steps of any machine-learning problem. ' +
      'Bruma is perfectly integrated with Bosque, Ciclon, and Flama, which makes it easy to manage' +
      " your models' training, deployment, and version control processes. This framework is suitable " +
      'for both experimentation and productionalisation, allowing you to streamline the process of training' +
      ' and deploying models from the very beginning. Bruma is designed to be user-friendly,' +
      ' with an intuitive interface that allows you to quickly and easily create training pipelines ' +
      'for your machine learning models. Bruma is an essential tool for anyone looking to streamline their' +
      ' machine learning workflows and build more efficient and effective models.',
    textColor: 'text-[#00bbd5]',
    href: 'https://bruma.dev',
  },
  {
    icon: <BosqueIcon />,
    title: 'Bosque',
    description:
      'Bosque is a powerful tool designed for version-controlling machine-learning models in an efficient ' +
      "and secure way. Bosque offers a robust set of features that allow you to manage and control your models' " +
      'versions with ease, ensuring that you always have access to the most up-to-date versions. ' +
      'Bosque also integrates perfectly with Flama and Ciclon. ' +
      'This integration allows you to seamlessly deploy your models in a serverless environment, ' +
      "ensuring that you can easily manage and control your models' versions, and rapidly deploy new models. " +
      'With Bosque, you can be confident that your machine learning models are always up-to-date, secure,' +
      ' and efficient, allowing you to focus on building great models and delivering value to your users.',
    textColor: 'text-[#9E744F]',
    href: 'https://bosque.dev',
  },
  {
    icon: <FlamaIcon />,
    title: 'Flama',
    description:
      'Flama is an advanced data-science oriented framework that allows you to rapidly build modern ' +
      'and robust machine learning APIs. With Flama, you can deploy your models in seconds, ' +
      'which means you can spend more time focusing on building great models and less time worrying' +
      ' about the deployment process. Flama is designed to be user-friendly, with an intuitive interface ' +
      'that allows you to quickly and easily build and deploy machine learning APIs. ' +
      'With Flama, you can be confident that your models will perform at their best.' +
      "Whether you're a data scientist, a software engineer, or just someone who wants to get started" +
      ' with machine learning, Flama is the perfect tool to help you build and deploy your models ' +
      'quickly and efficiently.',
    textColor: 'text-[#E25822]',
    href: 'https://flama.dev',
  },
  {
    icon: <CiclonIcon />,
    title: 'Ciclon',
    description:
      'Ciclon is designed to simplify the process of deploying machine-learning models. ' +
      'With Ciclon, you can deploy machine-learning models seamlessly and rapidly, ' +
      'without worrying about the headaches associated with traditional deployment methods. ' +
      'This product is fast and scalable, allowing you to deploy your models in a serverless environment, ' +
      "which means you don't have to worry about managing infrastructure. " +
      'Ciclon is designed to make the deployment process as easy as possible, ' +
      'with intuitive interfaces and automated processes that take care of the heavy lifting for you. ' +
      "Whether you're a data scientist or a software engineer, Ciclon is the perfect tool to help you get " +
      'your machine-learning models up and running quickly and efficiently.',
    textColor: 'text-[#00976E]',
    href: 'https://ciclon.dev',
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
  const descriptionRef = useRef<HTMLDivElement>(null)

  const selectedProduct = useMemo<Product>(() => products[selected], [selected])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onSelect = useCallback(
    (i: number) => {
      setIsOpen(i === selected ? !isOpen : true)
      setSelected(i)
      if (!isOpen)
        descriptionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
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
        <div
          className={`mx-auto h-fit max-w-5xl transition-all duration-500  ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
          ref={descriptionRef}
        >
          {selectedProduct && <ProductsDescription product={selectedProduct} />}
        </div>
      </div>
    </section>
  )
}
