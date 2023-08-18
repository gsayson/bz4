"use client"

import { GithubLogo, Globe } from "@phosphor-icons/react"

const C = "fill-zinc-400 dark:fill-zinc-500 hover:fill-black dark:hover:fill-white transition"

export function Card({ title, desc, url, github }: { title: string, desc: string, url?: string, github?: string }) {
    return (
        <div className="p-3 border border-zinc-400 dark:border-zinc-600 rounded-lg bg-zinc-100 dark:bg-zinc-800 shadow-md transition transform hover:scale-105 mb-4 flex justify-between align-middle items-center">
            <h1><span className="text-lg font-semibold">{title}</span> &mdash; {desc}</h1>
            <div className="flex space-x-2">
                {github && <a href={github}><GithubLogo size="1.75rem" className={C}/></a>}
                {url && <a href={url}><Globe size="1.75rem" className={C}/></a>}
            </div>
        </div>
    )
}