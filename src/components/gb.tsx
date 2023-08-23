"use client"

import { PaperPlaneRight } from "@phosphor-icons/react"
import { DateTime } from "luxon"
import Pusher from "pusher-js"
import { useEffect, useState } from "react"

export function GuestbookForm() {
    return (
        <form className="w-full flex my-4" onSubmit={
            async (e) => {
                e.preventDefault()
                const msg = new FormData(e.currentTarget).get("message")!.toString()
                await fetch("/api/guestbook", { method: "POST", body: JSON.stringify({ message: msg, date: DateTime.utc().toISO()! }) })
            }
        }>
            <input 
                type="text"
                className="px-3 py-2 border border-zinc-400 dark:border-zinc-600 rounded-l-lg bg-zinc-100 dark:bg-zinc-800 placeholder-zinc-400 dark:placeholder-zinc-500 flex-grow"
                placeholder="Leave a message."
                name="message"
                required
                autoComplete="off"
                maxLength={process.env.NEXT_PUBLIC_MAX_MSG_LEN as unknown | undefined as number | undefined}
            />
            <button className="bg-blue-600 text-white flex-grow-0 px-3 ml-2 rounded-r-lg transition hover:bg-blue-500" type="submit"><PaperPlaneRight weight="fill" color="white"/></button>
        </form>
    )
}

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
})

const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) => fetch(input, init).then(res => res.json())

export function GuestbookMessages({ messages }: { messages: { date: string, message: string }[] }) {
    const x: {
        date: DateTime;
        message: string;
    }[] = []
    for(const m of messages) {
        x.push({
            date: DateTime.fromISO(m.date, { zone: "utc" }),
            message: m.message
        })
    }
    x.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
    const [comments, setComments] = useState<{ date: DateTime, message: string }[]>(x)
    useEffect(() => {
        const channel = pusher.subscribe("guestbook");
        channel.bind("msg", (data: { message: string, date: string }) => setComments([{ date: DateTime.fromISO(data.date, { zone: "utc" }), message: data.message }, ...comments]))
        return () => pusher.unsubscribe("guestbook")
    }, [comments])
    return (
        <>{comments.map((f, i) => <p key={i}><span className="text-zinc-400 dark:text-zinc-500" suppressHydrationWarning>{f.date.toLocal().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)} &mdash; </span>{f.message}</p>)}</>
    )
}