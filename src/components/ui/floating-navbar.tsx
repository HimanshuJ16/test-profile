"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Link from "next/link";
import { ModeToggle } from '@/components/mode-toggle'
import { UserButton, currentUser } from '@clerk/nextjs'
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {

  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const { signOut } = useClerk();
  const { isSignedIn, sessionId } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}

        {!isSignedIn ? 
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => router.push("/sign-in")}>                
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="bg-white dark:bg-black inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl">
              Login
            </span>
          </button> : 
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => signOut(() => router.push("/"))}>                
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="bg-white dark:bg-black inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl">
              Sign out
            </span>
          </button>
        }


        
        <ModeToggle />
        <UserButton />

      </motion.div>
    </AnimatePresence>
  );
};
