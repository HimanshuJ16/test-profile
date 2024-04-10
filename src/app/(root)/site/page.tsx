'use client'
import { Spotlight } from "@/components/ui/Spotlight";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { LampContainer } from "@/components/ui/lamp";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { products } from "@/constants";
import { motion } from "framer-motion";
import img1 from '../../../../public/assets/1.jpg';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <section>
      <div className="h-[45rem] w-full rounded-md flex md:items-center md:justify-center bg-white/[0.96] dark:bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 from-neutral-600 dark:to-neutral-400 to-neutral-900 bg-opacity-50">
            Spotlight <br /> is the new trend.
          </h1>
          <p className="mt-4 font-normal text-base text-[#000]-300 dark:text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out of
            copy.
          </p>
        </div>
      </div>
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={
            <span>
              This Macbook is built with Tailwindcss. <br /> No kidding.
            </span>
          }
          badge={
            <Link target="_blank" href="https://himanshuj16.github.io/portfolio/projects">
              <Badge className="h-10 w-10 transform -rotate-12" />
            </Link>
          }
          src= {img1}
          showGradient={false}
        />
      </div>
      <HeroParallax products={products} />
      <div className="flex mt-[10rem] mx-auto gap-10 items-center justify-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Build A Custom Graphic Component In HTML From JavaScript
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Learn how to build a custom graphic component in HTML from scratch. Follow this code to integrate canvas component in your upcoming projects.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://himanshuj16.github.io/portfolio/_next/static/media/1.b9cd88bf.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/HimanshuJ16/canvas-code/blob/main/script.js"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                href='/sign-in'
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <button onClick={() => router.push("/sign-in")}>Sign up</button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Build A Custom Smooth Scrolling Feature In HTML From Scratch
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Learn how to use locomotive JS in HTML from JavaScript for Smooth-Scrolling. Follow this step-by-step guide to integrate Locomotive JS in your upcoming projects.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://himanshuj16.github.io/portfolio/_next/static/media/2.5592061b.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/locomotivemtl/locomotive-scroll"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <button onClick={() => router.push("/sign-in")}>Sign up</button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br dark:from-slate-300 from-slate-900 dark:to-slate-500 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Build lamps <br /> the right way
        </motion.h1>
      </LampContainer>
    </section>
  );
}  

const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};






