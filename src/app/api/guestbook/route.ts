import { Redis } from "@upstash/redis"
import { DateTime } from "luxon"
import { NextRequest, NextResponse } from "next/server"
import Pusher from "pusher"

const pusher = new Pusher({
    appId: process.env.PUSHER_ID!,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    useTLS: true
});

const redis = new Redis({
    url: process.env.REDIS_URL!,
    token: process.env.REDIS_TOKEN!,
  })

export async function GET() {
    const array: { message: string, date: string }[] = []
    for(const key of (await redis.keys("*")).map((key) => DateTime.fromISO(key, { zone: "utc" })).sort((a, b) => a < b ? -1 : a > b ? 1 : 0)) {
        array.push({ date: key.toISO()!, message: (await redis.get(key.toISO()!))! as string })
    }
    return NextResponse.json({
        messages: array.reverse()
    })
}

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as { message: string, date: string }
        let x;
        if(body.message.trim().length > (process.env.NEXT_PUBLIC_MAX_MSG_LEN! as unknown as number)) {
            x = new NextResponse("{error:\"too-long\"}")
        } else {
            const limit = 20
            if(await redis.dbsize() >= (limit)) {
                // time to delete; make space for the next entry.
                const ka = (await redis.keys("*")).map((key) => DateTime.fromISO(key, { zone: "utc" })).sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
                let index = 0
                while(await redis.dbsize() >= (limit)) {
                    await redis.del(ka[index++].toISO()!)
                }
            }
            pusher.trigger("guestbook", "msg", body)
            redis.set(body.date, body.message)
            x = new NextResponse("{error:\"none\"}")
        }
        return x
    } catch(e) {
        console.log("oops: " + e)
        return new NextResponse("{error:\"no-body\"}")
    }
}