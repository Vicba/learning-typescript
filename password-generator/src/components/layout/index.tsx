import React, { ReactNode } from 'react'

type layoutProps = {
    children: ReactNode
}

export default function Layout({children}: layoutProps) {
  return (
    <div className='w-screen h-screen bg-slate-950 flex items-center justify-center'>
        {children}
    </div>
  )
}
