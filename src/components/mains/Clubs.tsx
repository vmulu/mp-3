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

`

export default function Clubs() {
    return (
        <>
            <StyledMain>
                <title> Clubs | Victoria's Resume </title>
                    <h2>
                        Clubs & Campus Involvement
                    </h2>

                    <div id="collection">
                        <div id="itemfirst">
                            <h3>
                                National Society of Black Engineers
                            </h3>
                            <p>
                                Member | September 2022 - Present
                            </p>
                            <p>
                                - Active member of the National Society of Black Engineers (NSBE),
                                engaging in chapter events, workshops, and professional development with peers.
                             </p>
                             <p>
                                - Represented my chapter at two NSBE National Conventions (2x),
                                participating in technical sessions and the career fair while expanding my industry network.
                             </p>
                        </div>
                        <div id="item">
                            <h3>
                                Ethiopian Eritrean Student Association
                            </h3>
                            <p>
                                Treasurer | September 2022 - Present
                            </p>
                            <p>
                                - Managed budgeting, dues collection, reimbursements, and vendor
                                payments; maintained transparent record and monthly finance reports.
                             </p>
                             <p>
                                - Partnered with the executive board to allocate funds for cultural programs and
                                community service; led fundraising and campus funding requests to support events and member engagement.
                             </p>
                        </div>
                        <div id="item">
                            <h3>
                                Girls Who Code
                            </h3>
                            <p>
                                Member | September 2023 - Present
                            </p>
                            <p>
                                - Participated in weekly coding sessions and project sprints, building small apps while
                                practicing Python, web fundamentals, and Git.
                             </p>
                             <p>
                                - Supported outreach and community events, helping organize beginner-friendly workshops
                                and mentoring peers during study halls and hack nights.
                             </p>
                        </div>
                    </div>
            </StyledMain>
        </>
    )
}