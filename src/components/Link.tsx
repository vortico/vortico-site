import React, { useEffect, useMemo, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  href: string
}

export default function Link({ href, children, ...props }: LinkProps) {
  const { asPath } = useRouter()
  const [origin, setOrigin] = useState<string | null>(null)

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [setOrigin])

  const isSamePage = useMemo<boolean>(
    () => origin !== null && new URL(asPath, origin).pathname === new URL(href, origin).pathname,
    [href, origin, asPath]
  )

  return isSamePage ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  )
}
