"use client"
import { BackgroundBeams } from '@/components/ui/background-beams'
import { globeConfig, sampleArcs } from '@/constants'
import { motion } from 'framer-motion'
import React from 'react'
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const about = () => {
  return (
    <section>
      <div className="h-[40rem] w-full rounded-md dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 from-neutral-900 dark:to-neutral-600 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="dark:text-neutral-500 text-neutral-900 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="himanshujangir16@gmail.com"
            className="rounded-lg border p-2 border-neutral-500 dark:border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 dark:bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
      <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div"
          >
            <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
              We sell soap worldwide
            </h2>
            <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
              This globe is interactive and customizable. Have fun with it, and
              don&apos;t forget to share it. :)
            </p>
          </motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />;
          </div>
        </div>
      </div>
    </section>
  )
}

export default about