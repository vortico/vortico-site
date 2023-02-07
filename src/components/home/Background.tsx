import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Background() {
  const { scrollYProgress } = useScroll()
  const vortexScale = useTransform(scrollYProgress, [0, 100], [1, 20])
  const squares1Scale = useTransform(scrollYProgress, [0, 100], [1, 40])
  const squares2Scale = useTransform(scrollYProgress, [0, 100], [1, 80])

  return (
    <div id="background">
      <div className="fixed top-0 -z-50 h-screen w-screen">
        <div className="relative m-auto w-fit max-w-[5120px] overflow-hidden">
          <motion.div style={{ scale: vortexScale }}>
            <Image
              className="h-screen object-cover opacity-20 contrast-150"
              src="/images/background_5120x3200.jpg"
              width={5120}
              height={3200}
              alt="Vortico background"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="fixed top-0 -z-40 h-screen w-screen">
        <div className="relative ml-auto overflow-hidden">
          <motion.div style={{ scale: squares1Scale }}>
            <Image
              className="h-screen w-fit opacity-50"
              src="/images/background_squares_1.png"
              width={2600}
              height={3200}
              alt="Vortico background squares"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="fixed top-0 -z-30 h-screen w-screen">
        <div className="relative ml-auto overflow-hidden">
          <motion.div style={{ scale: squares2Scale }}>
            <Image
              className="h-screen w-fit opacity-50"
              src="/images/background_squares_2.png"
              width={2600}
              height={3200}
              alt="Vortico background squares"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
