import { Card } from "@/components/card"

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4 lg:mb-6">👋 hi, I&apos;m gerard</h1>
            <p>
                I&apos;m a full-stack developer who likes to dabble in everything, from web development with <a href="https://react.dev" className="link">React</a> and
                {" "}<a href="https://www.solidjs.com" className="link">SolidJS</a> to compilers and
                OS development. In addition, I also work with <a href="https://www.oracle.com/java/" className="link">Java</a> and
                {" "}<a href="https://www.rust-lang.org" className="link">Rust</a>.
            </p>
            <h2 className="text-2xl font-semibold mb-4 mt-6">🖥️ my cs journey</h2>
            <div className="space-y-4">
                <p>
                    I started programming when I was 8 or 9 years old, beginning with the language of <a
                    href="https://www.lua.org" className="link">Lua</a>.
                    A few months later I wrote stuff in Python, like a guessing game API. Afterwards, I decided
                    to learn Java when the latest version at the time was still <em>Java 8</em>.
                    Today, I&apos;m a fond user of <a href="https://spring.io" className="link">Spring</a>, and I am also
                    exploring other frameworks like <a href="https://micronaut.io" className="link">Micronaut</a>.
                </p>
                <p>
                    In fact, this is where I got my inspiration for <a href="https://github.com/gsayson/djinn"
                    className="link">Djinn</a>, which features an AOT
                    bundler transcending the slow Reflection API of the JVM.
                </p>
                <p>
                    Today, I write programs in Java, Rust, and occasionally Python, along with frontends using React or
                    SolidJS (in <a href="https://www.typescriptlang.org" className="link">TypeScript</a>).
                </p>
            </div>
            <h2 className="text-2xl font-semibold mb-4 mt-8">🤓 my mathematical hobby</h2>
            <div className="space-y-4">
                <p>
                    I started gaining an interest in mathematics at the start of 2023, and
                    what really pulled me in was &mdash; the intricacy of mathematics. It all started
                    when I watched <a href="https://www.youtube.com/playlist?list=PLwV-9DG53NDxU337smpTwm6sef4x-SCLv" className="link">this YouTube playlist
                    on group theory</a> &mdash; that was the first time that I was ever fascinated by mathematics&apos; rigour and complexity. Mathematics
                    was not just about playing with numbers anymore to me. It became an art: the art of proving.
                </p>
                <p>
                    Right now, I study <em>group theory</em> in my free time. <a href="https://en.wikipedia.org/wiki/Group_theory" className="link">Group theory</a>{" "}
                    is a part of the discipline of <a href="https://en.wikipedia.org/wiki/Abstract_algebra" className="link">abstract algebra</a>,
                    which deals with generalizing properties away &ndash; e.g. addition, subtraction, function composition, or some other operation, and combining them with a set. Group theory arises in many areas, for example
                    cryptography, and puzzles (<a href="https://en.wikipedia.org/wiki/Rubik%27s_Cube_group" className="link">the Rubik&apos;s cube</a>).
                </p>
                <p>
                    Other than that, I&apos;m reading Axler&apos;s <em>Linear Algebra Done Right</em> to establish a foothold for myself in linear algebra.
                </p>
            </div>
            <h1 className="text-2xl font-semibold mb-4 mt-8">my projects</h1>
            <Card title="gsn.bz" desc="The very website you're looking at right now." url="https://gsn.bz"
                github="https://github.com/gsayson/bz4"/>
            <Card title="goGSN" desc="A link shortener running on Redis." github="https://github.com/gsayson/go-bz"/>
            <Card title="Djinn" desc="A build-time-oriented Java framework with minimal runtime reflection."
                github="https://github.com/gsayson/djinn"/>
            <h1 className="text-2xl font-semibold mb-4 mt-6">connect with me</h1>
            <p>
                I&apos;m particularly active on the <a className="italic link" href="https://discordjug.net">Java
                Discord</a>, as <code className={"font-mono"}>@gsayson</code>. Feel free to talk to me over there!
                Alternatively, you can e-mail me at <a className="link"
                href="mailto:geruls@broskiclan.org">geruls@broskiclan.org</a>, or
                you can click on the icons in the footer to see my social handles.
            </p>
        </div>
    )
}