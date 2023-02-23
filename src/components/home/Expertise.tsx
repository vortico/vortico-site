import React, { ReactNode, useMemo, useState } from 'react'
import {
  AcademicCapIcon,
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
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)

  const isOpen = useMemo<boolean>(() => isClicked || isHover, [isClicked, isHover])

  return (
    <li
      className="list-item cursor-pointer"
      onClick={() => {
        setIsClicked(!isClicked)
        setIsHover(false)
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="absolute -left-4 -ml-px flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 ring-2 ring-white ring-brand-800">
        <div className="h-6 w-6 text-brand-800">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className={`mt-2 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {description}
      </p>
    </li>
  )
}

export default function Expertise() {
  return (
    <section id="expertise">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold lg:text-5xl">What sets us apart</h2>
        <p className="mt-8">
          With over two decades of experience, we are confident in our ability to provide unique expert services. We are
          computer scientists, software engineers, cloud architects, machine learning engineers and researchers,
          developers, and mathematicians, all to help you bring your projects to life and reach new heights for your
          company. We provide the support and guidance needed to turn your vision into a successful reality.
        </p>
        <ul className="relative mt-8 ml-4 list-inside space-y-6 border-l-2 border-brand-500 py-4 pl-8">
          <ExpertiseItem
            icon={<CpuChipIcon />}
            title="Machine Learning"
            description="We can help you unlock the full potential of your products, by leveraging the latest techniques and algorithms in the fields of AI and data analysis. Whether you're looking to improve your product recommendations, optimize your supply chain, or enhance your customer experience, we've got you covered. So why wait?"
          />
          <ExpertiseItem
            icon={<CodeBracketIcon />}
            title="Software Development"
            description="Are you in need of reliable software to help your business stay ahead of the competition? We offer top-quality development services that are tailored to meet the unique needs of your business. Using the latest technologies and frameworks to build scalable, flexible, and robust software solutions, we can help you achieve your business objectives. From custom software development to integration, migration, and maintenance, our services cover the full development lifecycle. We work closely with our clients to ensure that their software solutions are not just functional, but also user-friendly and visually appealing."
          />
          <ExpertiseItem
            icon={<PencilSquareIcon />}
            title="Software Architecture"
            description="Build software architectures that are modular, flexible, and designed for reuse, so that your software systems can be easily updated and scaled as your business grows. We focus on quality and efficiency, and we deliver software architecture designs in a timely and cost-effective manner."
          />
          <ExpertiseItem
            icon={<CloudIcon />}
            title="Cloud Solutions and Innovation"
            description="Are you looking for new ways to innovate your business and stay ahead of the competition? We think cloud native, and will work with you to create a customized cloud strategy that aligns with your business objectives, helping you to reduce costs, increase agility, and drive growth. From cloud migration and integration to cloud-native development, automation, and management. We'll help you leverage the latest cloud technologies and frameworks to build secure, scalable, and highly available cloud solutions that meet your specific needs. And with our focus on innovation, we'll ensure that your cloud solutions are not just efficient, but also help you to differentiate your business from the competition."
          />
          <ExpertiseItem
            icon={<CreditCardIcon />}
            title="FinTech & WealthTech"
            description="Build robust and reliable systems that can handle massive scale and high availability. We have a track record in FinTech projects, and specifically in building distributed, massively scalable, and fault-tolerant systems that are designed to withstand even the most demanding workloads. We will work with you to design a customized solution that aligns with your business objectives, ensuring that you're able to meet your customers' needs in real-time, 24/7."
          />
          <ExpertiseItem
            icon={<AcademicCapIcon />}
            title="Tech Training & Courses"
            description="We offer a wide range of courses, from beginner-level introductions to in-depth technical training on specific technologies and frameworks. Whether you're looking to learn web development, data science, cloud computing, or something else entirely, we've got you covered. Our training programs are designed to be flexible and customizable, with options for both online and in-person training. We also offer tailored training solutions for businesses, so you can train your entire team on the latest technologies and best practices."
          />
        </ul>
      </div>
    </section>
  )
}
