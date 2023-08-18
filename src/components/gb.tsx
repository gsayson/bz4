"use client"

import { PaperPlaneRight } from "@phosphor-icons/react"
import { DateTime } from "luxon"
import Pusher from "pusher-js"
import { useEffect, useState } from "react"
import useSWR from "swr"

export function GuestbookForm() {
    return (
        <form className="w-full flex my-4" onSubmit={
            async (e) => {
                e.preventDefault()
                const msg = new FormData(e.currentTarget).get("message")!.toString()
                await fetch("/api/guestbook", { method: "POST", body: JSON.stringify({ message: msg, date: DateTime.now().toISO()! }) })
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

export function GuestbookMessages() {
    const [comments, setComments] = useState<{ date: DateTime, message: string }[]>([])
    const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) => fetch(input, init).then((res) => res.json())
    const { data, error, isLoading } = useSWR("/api/guestbook/", fetcher)
    useEffect(() => {
        if(data) {
            const x: { date: string, message: string }[] = data.messages[0]
            const y = x.map(((f) => {
                return {
                    message: f.message,
                    date: DateTime.fromISO(f.date)
                }
            }))
            setComments((f) => y)
        }
    }, [data])
    useEffect(() => {
        const channel = pusher.subscribe("guestbook");
        channel.bind("msg", (data: { message: string, date: string }) => setComments([{ message: data.message, date: DateTime.fromISO(data.date) }, ...comments]))
        return () => pusher.unsubscribe("guestbook")
    }, [comments]);
    if(error) return <div>Failed to fetch comments.</div>
    if(isLoading) return <h2>Loading...</h2>
    return (
        <>{comments.reverse().map((f, i) => <p key={i}><span className="text-zinc-400 dark:text-zinc-500">{f.date.toLocaleString(DateTime.DATETIME_MED)} &mdash; </span>{f.message}</p>)}</>
    )
}