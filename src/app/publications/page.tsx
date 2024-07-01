export default function Publications() {
    return (
      <div>
          <h1 className="text-3xl font-semibold mb-4 lg:mb-6">my publications</h1>
          <p>
              I like to write about topics I find interesting; it also helps me learn as I write these for you.
              Here&apos;s a list of my publications in mathematics. I use{" "}
              <a href={"https://typst.app"} className="link">Typst</a> and <a href={"https://www.latex-project.org/"}
                                                                              className="link">LaTeX</a> to create them.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-12">further math 2023 notes</h2>
        <div className="space-y-4">
          <p>
            I wrote this last year in end-of-year 2023 as a pastime, with the aim
            of making a Further Mathematics textbook for fun. <em>Fortunately</em>,
            Cambridge just had to change the syllabus:
          </p>
          <ul className={"list-disc ml-4 my-2"}>
            <li>remove mathematical induction conic sections</li>
            <li>use computers in applying Simpson&apos;s Rule, the trapezium rule, the Euler method and the
              improved Euler method (Heun&apos;s method)
            </li>
            <li>add multivariable calculus, but without the Jacobian</li>
          </ul>
          <p>
            These notes are <em>very incomplete</em>, as I haven&apos;t had time to work on them in this year.
            The chapters included are:
          </p>
          <ul className={"list-disc ml-4 my-2"}>
            <li>mathematical induction</li>
            <li>ordinary differential equations (incomplete)</li>
            <li>numerical methods of ordinary differential equations and integrals</li>
          </ul>
          <p>
            You can access it <a
            href={"https://drive.google.com/file/d/1jYGmfsg_7SJtFY6pfKbHGm_AD21KWomj/view?usp=sharing"}
            className={"link"}>here</a>.
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-4 mt-12">h3 math 2025 notes</h2>
        <div className="space-y-4">
          <p>
            I wrote this during the holidays, with the aim
            of making a H3 Mathematics textbook for fun. This is intended
            as a supplementary text, which I will try to complete after I sit my exams.
          </p>
          <p>
          This is <em>very incomplete</em>, as I haven&apos;t had time to work on this.
            The chapters included are:
          </p>
          <ul className={"list-disc ml-4 my-2"}>
            <li>mathematical language (theorems & logic)</li>
            <li>introduction to limits (discussing squeeze theorem, diff. from first principles, etc.)</li>
          </ul>
          <p>
            You can access it <a
            href={"https://github.com/gsayson/h3-mathematics-2025"}
            className={"link"}>here</a>.
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-4 mt-12">h2 further math 2025: mv calc</h2>
        <div className="space-y-4">
          <p>
            I wrote this early this year to try to collect my knowledge of the multivariable calculus examined in 2025
                  for Further Mathematics.
              </p>
              <p>
                  You can access it <a
                href={"https://drive.google.com/file/d/1Bt4dB2eTJhH8wXg5zdW1_Go3vSlWoP1p/view?usp=sharing"}
                className={"link"}>here</a>.
              </p>
          </div>
      </div>
    )
}