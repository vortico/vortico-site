import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import PlainLayout from '@/layouts/plain'
import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 100], [1, 100])

  console.log(scrollYProgress)

  return (
    <PlainLayout>
      <>
        <motion.div className="fixed top-0 -z-50 h-screen opacity-30 grayscale" style={{ scale }}>
          <Image
            className="h-screen object-cover"
            src="/images/background_2560x1600.jpg"
            width={2560}
            height={1600}
            alt="Vortico background"
          />
        </motion.div>
        <header>
          <Hero />
        </header>
        <main className="mb-20 space-y-20 pt-20 sm:mb-32 sm:space-y-32 sm:pt-32 md:mb-40 md:space-y-40 md:pt-40"></main>
        <Footer />
      </>
    </PlainLayout>
  )
}
