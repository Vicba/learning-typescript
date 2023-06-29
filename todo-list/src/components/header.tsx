
import ToggleButton from './toggleButton'

export default function () {
  return (
    <>
        <header className='w-full flex flex-row items-center justify-between py-5 px-10'>
            <h1 className='text-white text-4xl tracking-[.25em] font-bold'>TODO</h1>
            <ToggleButton/>
        </header>
    </>
  )
}
