import styled from "styled-components";

const StyledMain = styled.main`

    h2 {
        margin: 25px 50px;
        text-align: center;
    }

    #collection{
        margin-right: 10%;
        margin-left: 10%;
    }

    #eduitemfirst{
        margin-bottom: 10%;
        margin-top: 10%;
    }

    #eduitem{
        margin-bottom: 10%;
    }

    p{
        margin: 10px;
    }

`

export default function Edu() {
    return (
        <>
            <StyledMain>
                <title> Education | Victoria's Resume </title>
                    <h2>
                        Education
                    </h2>

                    <div id="collection">
                        <div id="eduitemfirst">
                            <h3>
                                Highschool Diploma | <em>Pioneer Charter School of Science</em>
                            </h3>
                            <p>
                                GPA 4.1 - June 2022
                            </p>
                            <p>
                                <strong>Relevant Coursework:</strong> AP Computer Science Principles, AP English Literature, AP Computer Science A
                            </p>
                        </div>
                        <div id="eduitem">
                            <h3>
                                B.A. Computer Science | <em>Boston University</em>
                             </h3>
                             <p>
                                GPA 3.4 - May 2026
                             </p>
                             <p>
                             <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Discrete Mathematics, Linear Algebra,
                                Computer Systems, Probability in computing
                             </p>
                        </div>
                        <div id="eduitem">
                            <h3>
                                M.S. Computer Science | <em>Boston University</em>
                            </h3>
                            <p>
                                GPA 3.9 - May 2028
                            </p>
                            <p>
                                <strong>Thesis:</strong> "Scalable Graph Neural Networks for Time-Series Prediction", focused on model compression and real-time inference for clinical monitoring systems.
                            </p>
                            <p>
                                <strong>Relevant Coursework:</strong> Advanced Algorithms, Machine Learning Theory, Distributed Systems, Optimization Methods, Statistical Learning.
                            </p>
                        </div>

                    </div>

            </StyledMain>
        </>
    )
}