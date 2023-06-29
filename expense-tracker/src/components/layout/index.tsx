import {ReactNode} from 'react'

import Container from './container'

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className='w-screen h-screen'>
      <Container>
        {children}
      </Container>
    </div>
  )
}
