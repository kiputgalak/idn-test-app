import type { FC, ReactNode } from 'react'
import Link from 'next/link'
import MuiLink from '@mui/material/Link'

interface LinkComponentProps {
  readonly href: string
  readonly children: ReactNode
}

const LinkComponent: FC<LinkComponentProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <MuiLink underline="none">{children}</MuiLink>
    </Link>
  )
}

export default LinkComponent
