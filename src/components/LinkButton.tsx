import Link from '@/components/Link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface LinkButtonProps extends React.ComponentProps<'a'> {
  text: string
  color?: string
  leftIcon?: boolean
  rightIcon?: boolean
}

const colorSelector: Record<string, string> = {
  brand: 'bg-brand-500 text-primary-100 hover:bg-brand-700 hover:text-primary-300 focus:ring-brand-600',
  primary: 'bg-primary-500 text-primary-100 hover:bg-primary-700 hover:text-primary-300 focus:ring-primary-600',
  slate: 'bg-slate-500 text-primary-100 hover:bg-slate-700 hover:text-primary-300 focus:ring-slate-600',
  gray: 'bg-gray-500 text-primary-100 hover:bg-gray-700 hover:text-primary-300 focus:ring-gray-600',
  zinc: 'bg-zinc-500 text-primary-100 hover:bg-zinc-700 hover:text-primary-300 focus:ring-zinc-600',
  neutral: 'bg-neutral-500 text-primary-100 hover:bg-neutral-700 hover:text-primary-300 focus:ring-neutral-600',
  stone: 'bg-stone-500 text-primary-100 hover:bg-stone-700 hover:text-primary-300 focus:ring-stone-600',
  red: 'bg-red-500 text-primary-100 hover:bg-red-700 hover:text-primary-300 focus:ring-red-600',
  orange: 'bg-orange-500 text-primary-100 hover:bg-orange-700 hover:text-primary-300 focus:ring-orange-600',
  amber: 'bg-amber-500 text-primary-100 hover:bg-amber-700 hover:text-primary-300 focus:ring-amber-600',
  yellow: 'bg-yellow-500 text-primary-100 hover:bg-yellow-700 hover:text-primary-300 focus:ring-yellow-600',
  lime: 'bg-lime-500 text-primary-100 hover:bg-lime-700 hover:text-primary-300 focus:ring-lime-600',
  green: 'bg-green-500 text-primary-100 hover:bg-green-700 hover:text-primary-300 focus:ring-green-600',
  emerald: 'bg-emerald-500 text-primary-100 hover:bg-emerald-700 hover:text-primary-300 focus:ring-emerald-600',
  teal: 'bg-teal-500 text-primary-100 hover:bg-teal-700 hover:text-primary-300 focus:ring-teal-600',
  cyan: 'bg-cyan-500 text-primary-100 hover:bg-cyan-700 hover:text-primary-300 focus:ring-cyan-600',
  sky: 'bg-sky-500 text-primary-100 hover:bg-sky-700 hover:text-primary-300 focus:ring-sky-600',
  blue: 'bg-blue-500 text-primary-100 hover:bg-blue-700 hover:text-primary-300 focus:ring-blue-600',
  indigo: 'bg-indigo-500 text-primary-100 hover:bg-indigo-700 hover:text-primary-300 focus:ring-indigo-600',
  violet: 'bg-violet-500 text-primary-100 hover:bg-violet-700 hover:text-primary-300 focus:ring-violet-600',
  purple: 'bg-purple-500 text-primary-100 hover:bg-purple-700 hover:text-primary-300 focus:ring-purple-600',
  fuchsia: 'bg-fuchsia-500 text-primary-100 hover:bg-fuchsia-700 hover:text-primary-300 focus:ring-fuchsia-600',
  pink: 'bg-pink-500 text-primary-100 hover:bg-pink-700 hover:text-primary-300 focus:ring-pink-600',
  rose: 'bg-rose-500 text-primary-100 hover:bg-rose-700 hover:text-primary-300 focus:ring-rose-600',
}

export default function LinkButton({
  text,
  color = 'primary',
  leftIcon = false,
  rightIcon = false,
  className,
  ...props
}: LinkButtonProps) {
  const classColor = colorSelector?.[color]

  return (
    <Link
      {...props}
      className={`inline-flex h-full items-center rounded-full px-4 focus:outline-none focus:ring-2 ${classColor} ${
        leftIcon && 'pl-2'
      } ${rightIcon && 'pr-2'} ${className}`}
    >
      {leftIcon && <ChevronLeftIcon className="h-4 pr-2" />}
      <span className="text-left font-semibold">{text}</span>
      {rightIcon && <ChevronRightIcon className="h-4 pl-2" />}
    </Link>
  )
}
