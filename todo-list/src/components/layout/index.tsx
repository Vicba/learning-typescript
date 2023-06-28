import { ReactNode } from 'react'



type ChildrenProps = {
    children: ReactNode
}

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start relative overflow-y-scroll dark:bg-slate-900">
      <div className="h-1/3 w-full bg-no-repeat bg-cover bg-mobile-light sm:bg-desktop-light dark:bg-mobile-dark dark:sm:bg-desktop-dark"></div>
      <div className="h-full bg-transparent absolute inset-1/4">
        {children}
      </div>
    </div>
  );
}