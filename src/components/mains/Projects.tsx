
import Calculator from "./Calculator"
export default function Projects() {
    return (
        <>
            <main>
                <title> Projects | Victoria's Resume </title>
                    <h2>
                        Projects
                    </h2>

                    <div id="collection">
                        <div id="item">
                            <h3>
                                Connect 4 | <em>Python</em>
                            </h3>
                            <p>
                                November 2022
                            </p>
                            <p>
                                Developed a sophisticated program employing classes to facilitate player-versus-AI competition,
                                leveraging recursion to calculate a numerical value for the optimal move of the AI.
                            </p>
                        </div>
                        <div id="item">
                            <h3>
                                MelaninRx | <em>Python, HTML, CSS, Javascript</em>
                             </h3>
                             <p>
                                December 2023
                             </p>
                             <p>
                                Incorporated AI chatbot by implementing OpenAI API to create a functional website that was
                                designed to help patients receive medical advice without medical bias. While working on the
                                front-end I gained valuable strategies on how to make an efficient website to promote patient satisfaction.
                             </p>
                        </div>
                        <div id="item">
                            <h3>
                                Terraform Validator | <em>Python, Docker, Jenkins, AWS</em>
                             </h3>
                             <p>
                                Summer 2024
                             </p>
                             <p>
                                Developed TFPlan Validator repository to automate checking on terraform files during a Jenkins build
                                to catch any unintended deletion or replacement of AWS resources. Is successfully integrated into the
                                Data Pipeline teams production repository at AthenaHealth.
                             </p>
                        </div>
                    </div>
            </main>

            {/* using calculator component */}
            <Calculator/>
        </>
    )
}