export default function Publications() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-4 lg:mb-6">my publications</h1>
            <p>
                Here&apos;s a list of my publications in mathematics. I use
                <a href={"https://typst.app"}>Typst</a> to create them.
            </p>
            <h2 className="text-2xl font-semibold mb-4 mt-6">further math 2023 notes</h2>
            <div className="space-y-4">
                <p>
                    I wrote this last year in end-of-year 2023 as a pastime, with the aim
                    of making a Further Mathematics textbook for fun. <em>Fortunately</em>,
                    Cambridge just had to change the syllabus:
                    <ul className={"list-disc ml-4 my-2"}>
                        <li>remove mathematical induction conic sections</li>
                        <li>use computers in applying Simpson&apos;s Rule, the trapezium rule, the Euler method and the improved Euler method (Heun&apos;s method)</li>
                        <li>add multivariable calculus, but without the Jacobian</li>
                    </ul>
                </p>
                <p>
                    These notes are <em>very incomplete</em>, as I haven&apos;t had time to work on them in this year.
                    The chapters included are:
                    <ul className={"list-disc ml-4 my-2"}>
                        <li>mathematical induction</li>
                        <li>ordinary differential equations (incomplete)</li>
                        <li>numerical methods of ordinary differential equations and integrals</li>
                    </ul>
                </p>
                <p>
                    You can access it <a href={"https://drive.google.com/file/d/1jYGmfsg_7SJtFY6pfKbHGm_AD21KWomj/view?usp=sharing"} className={"link"}>here</a>.
                </p>
            </div>
        </div>
    )
}