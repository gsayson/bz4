"use client"

import {GithubLogo, LinkedinLogo, TwitterLogo, YoutubeLogo} from "@phosphor-icons/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react";

export function Navbar() {
    function NEntry({ href, children }: { href: string, children: React.ReactNode }) {
        function process(str: string): string {
            return JSON.stringify(str.split("/").filter(f => f.length != 0))
        }
        return <Link href={href} className={`transition mr-3 lg:mr-4 ${process(usePathname()) == process(href) ? "text-blue-500" : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400"}`}>{children}</Link>
    }
    return (
        <nav className="flex md:flex-row md:my-6 flex-col mb-4">
            <NEntry href="/">home</NEntry>
            <NEntry href="/guestbook">guestbook</NEntry>
            <NEntry href="/publications">publications</NEntry>
        </nav>
    )
}

export function Footer() {
    return (
      <footer className="mt-8 text-center flex space-x-3 items-center justify-center w-full">
        <a href="https://twitter.com/gsn_bz"
           className="transition text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400"><TwitterLogo
          size="1.5rem" weight="fill"/></a>
        <a href="https://github.com/gsayson"
           className="transition text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400"><GithubLogo
          size="1.5rem" weight="fill"/></a>
        <a href="https://youtube.com/@gerul5"
           className="transition text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400"><YoutubeLogo
          size="1.5rem" weight="fill"/></a>
        <a href="https://www.linkedin.com/in/gsaysonbz/"
           className="transition text-zinc-400 dark:text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-400"><LinkedinLogo
          size="1.5rem" weight="fill"/></a>
      </footer>
    )
}