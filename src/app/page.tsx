import { Card } from "@/components/card"
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-2 lg:mb-4">👋 hi, I&apos;m gerard</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href={"https://www.codewars.com/users/Geruls"}><img src={"https://www.codewars.com/users/Geruls/badges/small"} alt={"my badge"} className={"mb-4 lg:mb-6"}/></a>
            <p>(hi HCI pls admit me :D)</p>
            <p>
                I&apos;m a full-stack developer who likes to dabble in everything, from web development with <a href="https://react.dev" className="link">React</a> and
                {" "}<a href="https://www.solidjs.com" className="link">SolidJS</a> to compilers and
                OS development. In addition, I also work with <a href="https://www.oracle.com/java/" className="link">Java</a> and
                {" "}<a href="https://www.rust-lang.org" className="link">Rust</a>.
            </p>
            <h2 className="text-2xl font-semibold mb-4 mt-6">computer science</h2>
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
            <h2 className="text-2xl font-semibold mb-4 mt-8">mathematics</h2>
            <div className="space-y-4">
                <p>
                    Right now, I study <em>group theory</em> in my free time. <a href="https://en.wikipedia.org/wiki/Group_theory" className="link">Group theory</a>{" "}
                    is a part of the discipline of <a href="https://en.wikipedia.org/wiki/Abstract_algebra" className="link">abstract algebra</a>,
                    which deals with generalizing properties from real numbers (e.g. operations, their associativity and invertibility) and combining them with a set.
                    Group theory arises in many areas, for example cryptography, and puzzles, most notably <a href="https://en.wikipedia.org/wiki/Rubik%27s_Cube_group" className="link">the Rubik&apos;s cube</a>.
                </p>
                <p>
                    I&apos;m reading Axler&apos;s <em>Linear Algebra Done Right</em> to establish a foothold for myself in linear algebra, along with
                    Casella &amp; Berger&apos;s <em>Statistical Inference</em> for statistics.
                </p>
                <p>
                    If you&apos;re interested in my mathematical publications which discuss higher-level mathematics, visit <Link href={"/publications"} className={"link"}>this page.</Link>
                    Alternatively, feel free to check out my YouTube channel in the footer!
                </p>
            </div>
            <h1 className="text-2xl font-semibold mb-4 mt-8">my projects</h1>
            <Card title="gsn.bz" desc="The very website you're looking at right now." url="https://gsn.bz"
                github="https://github.com/gsayson/bz4"/>
            <Card title="Gateway" desc="An authentication server running on MongoDB." github="https://github.com/gsayson/gateway"/>
            <Card title="Project Gratitude" desc="A web app for students and teachers to express their gratitude to each other." github="https://github.com/gsayson/project-gratitude"/>
            <Card title="goGSN" desc="A link shortener running on Redis." github="https://github.com/gsayson/go-bz"/>
            <Card title="Djinn" desc="A build-time-oriented Java framework with minimal runtime reflection, written for a 2023 coding jam."
                github="https://github.com/gsayson/djinn"/>
            <Card title="Prive/Jitter" desc="A web server framework for Java, written for a 2022 coding jam." github="https://github.com/gsayson/go-bz"/>
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