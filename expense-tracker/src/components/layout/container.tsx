import {ReactNode} from 'react'

type ContainerProps = {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
  return (
    <div className='h-full w-full p-20 flex flex-row justify-around'>
        {children}
    </div>
  )
}
