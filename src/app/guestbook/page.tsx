import { GuestbookForm, GuestbookMessages } from "@/components/gb"
import { GET as gbGet } from "../api/guestbook/route"

export default async function Guestbook() {
    const comments = (await (await gbGet()).json()) as { messages: { message: string, date: string }[] }
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4 lg:mb-6">my guestbook</h1>
            <div className="space-y-4">
                <p>Feel free to (anonymously) leave a comment &mdash; only your message will be recorded. <b>Please do not spam!</b></p>
                <p>Note that you are only allowed to type a maximum of {process.env.NEXT_PUBLIC_MAX_MSG_LEN!} characters in a comment.</p>
            </div>
            <GuestbookForm/>
            <GuestbookMessages messages={comments.messages}/>
        </div>
    )
}