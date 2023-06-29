import React, { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
  return (
    <div className='w-[90%] sm:w-[30%] flex flex-col gap-3 items-center justify-center'>
        {children}
    </div>
  )
}
