import styled from "styled-components";

const StyledMain = styled.main`

    margin: 0 100px;

    h2 {
        margin: 25px 50px;
        text-align: center;
    }

    #itemfirst{
        margin-bottom: 10%;
        margin-top: 10%;
    }

    #item{
        margin-bottom: 10%;
    }

    p{
        margin: 10px;
    }

    @media (max-width: 1000px) {
        margin-left: 10%;
        margin-right: 10%;
    }

`

export default function Employ() {
    return (
        <>
            <StyledMain>
                <title> Employment | Victoria's Resume </title>
                    <h2>
                        Employment
                    </h2>

                    <div>
                        <div id="itemfirst">
                            <h3>
                                Athena Health | <em>Software Engineer Intern</em>
                            </h3>
                            <p>
                                Summer 2024 & Summer 2025
                            </p>
                            <p>
                                - Collaborated with the Data Pipelines team, implementing and optimizing data workflows using Agile
                                methodologies to enhance data processing efficiency and project delivery.
                            </p>
                            <p>
                                - After completing the TFPlan Validator Project, I completed multiple Tech Debt tickets on our Jira Board.
                            </p>
                        </div>
                        <div id="item">
                            <h3>
                                Hack Diversity | <em>Fellow</em>
                             </h3>
                             <p>
                                December 2023 - August 2024
                             </p>
                             <p>
                                - Selected for a competitive career leadership and workforce development program focused on Boston's
                                innovation, corporate, civic, academic, and philanthropic sectors in the tech industry.
                             </p>
                             <p>
                                - Collaborated with a team of 5 fellows to develop a full-stack CRUD application, successfully meeting a
                                2-month deadline.
                             </p>
                        </div>
                        <div id="item">
                            <h3>
                                Camp Terrier | <em>Admin</em>
                             </h3>
                             <p>
                                Summer 2023 - Summer 2024
                             </p>
                             <p>
                                - Proficiently utilized VSI systems to manage guest information, registrations, and program scheduling.
                             </p>
                             <p>
                                - Managed camper registration processes, including paperwork, payments, and medical forms, while
                                coordinating logistics such as transportation, accommodations, and activity schedules.
                             </p>
                        </div>
                    </div>
            </StyledMain>
        </>
    )
}