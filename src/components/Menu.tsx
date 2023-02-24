import { VorticoIcon } from '@/components/icons'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { IconMenu2, IconX } from '@tabler/icons-react'

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-start gap-2 text-brand-500" aria-label="Flama logo">
      <VorticoIcon className="h-5 w-5 lg:h-6 lg:w-6" />
      <span className="text-xl lg:text-2xl">Vortico</span>
    </Link>
  )
}

function NavList({ ...props }: React.ComponentProps<'ul'>) {
  const entries = [
    { href: '/#products', title: 'Products' },
    { href: '/#expertise', title: 'Expertise' },
    { href: '/#mission-vision', title: 'Machine Learning' },
    { href: '/team', title: 'Team' },
    { href: '/hire', title: 'Hire us' },
  ]

  return (
    <ul {...props}>
      {entries.map((entry) => (
        <li key={entry.href}>
          <Link href={entry.href} className="block text-primary-300 hover:text-brand-400">
            {entry.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

interface FloatMenuProps {
  onClose: () => void
}

function FloatMenu({ onClose }: FloatMenuProps) {
  return (
    <div
      className="fixed inset-0 z-[200] min-h-screen w-screen p-4 sm:p-6 md:p-[10vh] lg:p-[12vh]"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-primary-900/80"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="relative rounded bg-primary-100 py-6 text-base font-semibold text-primary-600 shadow-lg dark:bg-primary-800 dark:text-primary-400">
        <button className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-primary-400 hover:text-primary-500 dark:text-primary-600 dark:hover:text-primary-500">
          <IconX className="h-5 w-5" onClick={onClose} aria-label="close menu" />
        </button>
        <nav className="px-6 pb-6">
          <NavList className="flex flex-col gap-6 text-lg font-medium text-primary-600 dark:text-primary-400 " />
        </nav>
      </div>
    </div>
  )
}

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex justify-start lg:w-1 lg:flex-1">
          <Logo />
        </div>
        <div className="hidden items-center justify-between lg:flex">
          <nav className="pr-16">
            <NavList className="flex flex-row gap-10 text-lg font-medium text-primary-600 dark:text-primary-400" />
          </nav>
        </div>
        <div className="flex items-center justify-end gap-5 lg:hidden">
          <button
            className="block text-primary-400 hover:text-primary-500 dark:text-primary-600 dark:hover:text-primary-500"
            onClick={onOpen}
            aria-label="Open menu"
          >
            <IconMenu2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isOpen && createPortal(<FloatMenu onClose={onClose} />, document.body)}
    </>
  )
}
