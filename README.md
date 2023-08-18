# BZ 4

This repository contains code for my personal website. It is powered by
NextJS, Pusher Channels & Upstash.

Events through Pusher Channels are sent through the channel `guestbook`
with event name `msg`.

## Required environment variables

- `NEXT_PUBLIC_PUSHER_KEY` is the Pusher Channels app key.
- `NEXT_PUBLIC_PUSHER_CLUSTER` is the Pusher Channels cluster.
- `NEXT_PUBLIC_MAX_MSG_LEN` is the maximum message length (in characters, after trimming) that can be sent to the guestbook.
- `PUSHER_ID` is the Pusher Channels app ID.
- `PUSHER_SECRET` is the Pusher Channels app secret.
- `REDIS_URL` is the URL of the Redis database for the guestbook.
- `REDIS_TOKEN` is the token of the Redis database for the guestbook.
