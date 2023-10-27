import { Card } from "@/components/card"

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4 lg:mb-6">hi, i&apos;m gerard 👋</h1>
            <div className="space-y-4">
                <p>
                    I&apos;m a full-stack developer who likes to dabble in everything, from web development with <a href="https://react.dev" className="link">React</a> and <a href="https://www.solidjs.com" className="link">SolidJS</a> to compilers and OS development.
                    In addition, I also work with <a href="https://www.oracle.com/java/" className="link">Java</a> and <a href="https://www.rust-lang.org" className="link">Rust</a>.
                </p>
                <p>
                    I started programming when I was 7 years old, beginning with the language of <a href="https://www.lua.org" className="link">Lua</a>. At that time I wanted to make scripts in <em>ROBLOX</em>.
                    A few months later I wrote stuff in Python, especially using Django and Flask; then I wanted to try and make a <em>Minecraft</em> client, so I tried to learn Java (successfully) and
                    eventually I got to learn how to use Spring.
                </p>
                <p>
                    Today, I write programs in Java, Rust, and Python (if <em>absolutely</em> necessary), along with frontends using React or SolidJS (in <a href="https://www.typescriptlang.org" className="link">TypeScript</a>).
                </p>
            </div>
            <h1 className="text-3xl font-semibold mb-4 mt-6">my projects</h1>
            <Card title="gsn.bz" desc="The very website you're looking at right now." url="https://gsn.bz" github="https://github.com/gsayson/bz4"/>
            <Card title="goGSN" desc="A free link shortener running on Redis." url="https://go.gsn.bz"/>
            <Card title="Djinn" desc="A build-time-oriented Java framework with minimal runtime reflection." github="https://github.com/gsayson/djinn"/>
            <h1 className="text-3xl font-semibold mb-4 mt-6">connect with me</h1>
            <p>
                I&apos;m particularly active on the <a className="italic link" href="https://discordjug.net">Java Discord</a>. Feel free to talk to me over there!
                Alternatively, you can e-mail me at <a className="link" href="mailto:geruls@broskiclan.org">geruls@broskiclan.org</a>.
            </p>
        </div>
    )
}