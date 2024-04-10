import React from 'react'
import { Boxes } from './ui/background-boxes'
import { cn } from '@/lib/utils'

const Footer = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden dark:bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl dark:text-white text-black relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 dark:text-neutral-300 text-neutral-900 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  )
}

export default Footer