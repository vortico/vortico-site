import React, { ReactNode, useMemo, useState } from 'react'
import { BosqueIcon, BrumaIcon, CiclonIcon, FlamaIcon } from '@/components/icons'
import { IconGitPullRequest, IconMicroscope, IconPackage, IconTruckDelivery } from '@tabler/icons-react'

interface Stage {
  title: string
  description: string
  product: string
  icon: ReactNode
  productIcon: ReactNode
  textColor: string
  position: string
}

const stages: Stage[] = [
  {
    title: 'Training',
    description: 'Adjust model parameters and learn from data',
    product: 'Bruma',
    icon: <IconMicroscope className="h-full w-full" />,
    productIcon: <BrumaIcon />,
    textColor: 'text-[#00bbd5]',
    position: 'top-7 left-7',
  },
  {
    title: 'Versioning',
    description: 'Protect and track model changes',
    product: 'Bosque',
    icon: <IconGitPullRequest className="h-full w-full" />,
    productIcon: <BosqueIcon />,
    textColor: 'text-[#9E744F]',
    position: 'top-7 right-7',
  },
  {
    title: 'Serving',
    description: 'Package and expose model APIs',
    product: 'Flama',
    icon: <IconPackage className="h-full w-full" />,
    productIcon: <FlamaIcon />,
    textColor: 'text-[#E25822]',
    position: 'bottom-7 right-7',
  },
  {
    title: 'Deploying',
    description: 'Productionalise models',
    product: 'Ciclon',
    icon: <IconTruckDelivery className="h-full w-full" />,
    productIcon: <CiclonIcon />,
    textColor: 'text-[#00976E]',
    position: 'bottom-7 left-7',
  },
]

function CycleImage({ ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg fill="currentColor" version="1.1" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m308 147a0.96 0.96 0 0 0-0.68 0.28 0.96 0.96 0 0 0 0 1.4l6.4 6.4 6.4-6.4a0.96 0.96 0 0 0 0-1.4 0.96 0.96 0 0 0-1.4 0l-5.1 5.1-5.1-5.1a0.96 0.96 0 0 0-0.68-0.28zm0 5.7a0.96 0.96 0 0 0-0.68 0.28 0.96 0.96 0 0 0 0 1.4l6.4 6.4 6.4-6.4a0.96 0.96 0 0 0 0-1.4 0.96 0.96 0 0 0-1.4 0l-5.1 5.1-5.1-5.1a0.96 0.96 0 0 0-0.68-0.28zm0.015 5.8a0.96 0.96 0 0 0-0.68 0.27 0.96 0.96 0 0 0-0.022 1.4l6.4 6.7 6.4-6.7a0.96 0.96 0 0 0-0.022-1.4 0.96 0.96 0 0 0-1.4 0.03l-5.1 5.2-5.1-5.2a0.96 0.96 0 0 0-0.67-0.3z" />
      <path d="m148 1.1e-4a0.96 0.96 0 0 0-0.67 0.28 0.96 0.96 0 0 0 0 1.4l5.1 5.1-5.1 5.1a0.96 0.96 0 0 0 0 1.4 0.96 0.96 0 0 0 1.4 0l6.4-6.4-6.4-6.4a0.96 0.96 0 0 0-0.68-0.28zm5.8 0a0.96 0.96 0 0 0-0.68 0.28 0.96 0.96 0 0 0 0 1.4l5.1 5.1-5.1 5.1a0.96 0.96 0 0 0 0 1.4 0.96 0.96 0 0 0 1.4 0l6.4-6.4-6.4-6.4a0.96 0.96 0 0 0-0.68-0.28zm5.7 0a0.96 0.96 0 0 0-0.68 0.3 0.96 0.96 0 0 0 0.03 1.4l5.2 5.1-5.2 5.1a0.96 0.96 0 0 0-0.03 1.4 0.96 0.96 0 0 0 1.4 0.03l6.7-6.4-6.7-6.4a0.96 0.96 0 0 0-0.68-0.27z" />
      <path d="m6.7 153-6.4 6.7a0.96 0.96 0 0 0 0.03 1.4 0.96 0.96 0 0 0 1.4-0.022l5.1-5.2 5.1 5.2a0.96 0.96 0 0 0 1.4 0.022 0.96 0.96 0 0 0 0.03-1.4zm0 6-6.4 6.4a0.96 0.96 0 0 0 0 1.4 0.96 0.96 0 0 0 1.4 0l5.1-5.1 5.1 5.1a0.96 0.96 0 0 0 1.4 0 0.96 0.96 0 0 0 0-1.4zm0 5.8-6.4 6.4a0.96 0.96 0 0 0 0 1.4 0.96 0.96 0 0 0 1.4 0l5.1-5.1 5.1 5.1a0.96 0.96 0 0 0 1.4 0 0.96 0.96 0 0 0 0-1.4z" />
      <path d="m161 307a0.96 0.96 0 0 0-0.69 0.27l-6.7 6.4 6.7 6.4a0.96 0.96 0 0 0 1.4-0.022 0.96 0.96 0 0 0-0.022-1.4l-5.2-5.1 5.2-5.1a0.96 0.96 0 0 0 0.022-1.4 0.96 0.96 0 0 0-0.67-0.3zm5 0.28-6.4 6.4 6.4 6.4a0.96 0.96 0 0 0 1.4 0 0.96 0.96 0 0 0 0-1.4l-5.1-5.1 5.1-5.1a0.96 0.96 0 0 0 0-1.4 0.96 0.96 0 0 0-1.4 0zm5.8 0-6.4 6.4 6.4 6.4a0.96 0.96 0 0 0 1.4 0 0.96 0.96 0 0 0 0-1.4l-5.1-5.1 5.1-5.1a0.96 0.96 0 0 0 0-1.4 0.96 0.96 0 0 0-1.4 0z" />
      <path d="m160 5.8c-85-1.9e-6 -154 69-154 154 0 85 69 154 154 154 85 0 154-69 154-154 0-85-69-154-154-154zm0 1.9c84 0 152 68 152 152 0 84-68 152-152 152-84 0-152-68-152-152-1.8e-6 -84 68-152 152-152z" />
    </svg>
  )
}

interface StageIconProps {
  stage: Stage
  isActive: boolean

  setIsActive(x: boolean): void
}

function StageIcon({ stage, isActive, setIsActive }: StageIconProps) {
  return (
    <div
      className={`h-12 w-12 rounded-full p-2 ring-2 ring-brand-800 ${
        isActive ? `bg-primary-500 ${stage.textColor}` : 'bg-brand-500 text-brand-800'
      }`}
      onClick={() => {
        setIsActive(!isActive)
        setTimeout(() => setIsActive(false), 5000)
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {isActive ? stage.productIcon : stage.icon}
    </div>
  )
}

interface StageDescriptionProps {
  stage?: Stage
}

function StageDescription({ stage }: StageDescriptionProps) {
  return (
    <div className="space-y-2 text-center">
      <h3 className={`text-2xl font-bold md:text-3xl ${stage ? stage.textColor : 'text-primary-100'}`}>
        {stage?.product || 'Machine Learning'}
      </h3>
      <h4 className="text-xl font-semibold text-primary-50">{stage?.title || 'Lifecycle'}</h4>
      <p>{stage?.description || 'A roadmap to success'}</p>
      {!stage?.description && <div className="text-sm italic text-brand-500">Click a stage to see more</div>}
    </div>
  )
}

export default function MachineLearningLifecycle() {
  const [active, setActive] = useState<number | null>(null)

  const selectedStage = useMemo<Stage | undefined>(() => (active !== null ? stages[active] : undefined), [active])

  return (
    <section id="ml-cycle-of-life">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="mx-auto h-80 w-80">
          <div className="absolute h-80 w-80">
            <CycleImage className="text-brand-500" />
          </div>
          <div className="relative h-full w-full">
            {stages.map((stage, i) => (
              <div key={i} className={`absolute ${stage.position}`}>
                <StageIcon
                  stage={stages[i]}
                  isActive={active === i}
                  setIsActive={(x: boolean) => setActive(x ? i : null)}
                />
              </div>
            ))}
            <div className="absolute inset-y-20 inset-x-10 flex h-40 w-60 items-center justify-center">
              <StageDescription stage={selectedStage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
