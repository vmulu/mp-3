import styled from "styled-components";

const StyledHTwo = styled.h2`

    margin: 25px 50px;
    text-align: center;

`

const StyledHFour = styled.h4`
    margin-top: 50px;
    margin-bottom: 10px;
    text-align: left;
    padding-left: 70px
`

const StyledTable = styled.table`

    width: 80%;
    margin: auto;


    th, td {
        border: 1px solid #450920;
        padding: 8px 10px;
    }

`
export default function Ref() {
    return (
        <>
            <main>
                <title> References | Victoria's Resume </title>
                <StyledHTwo>
                        References
                </StyledHTwo>

                    <StyledHFour>
                        Professional
                    </StyledHFour>
                    <StyledTable>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Position
                            </th>
                            <th>
                                Contact
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Barbara Green Glaz
                            </td>
                            <td>
                                Boss
                            </td>
                            <td>
                                barbara@bu.edu
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Colleen Grace
                            </td>
                            <td>
                                Colleague
                            </td>
                            <td>
                                cgrace@bu.edu
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Harry James
                            </td>
                            <td>
                                Advisor
                            </td>
                            <td>
                                hjames@bu.edu
                            </td>
                        </tr>
                    </StyledTable>

                    <StyledHFour>
                        Personal
                    </StyledHFour>
                    <StyledTable>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Relation
                            </th>
                            <th>
                                Contact
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Zufan Kassa
                            </td>
                            <td>
                                Mother
                            </td>
                            <td>
                                zkassa@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Mulugeta Anjebo
                            </td>
                            <td>
                                Father
                            </td>
                            <td>
                                manjebo@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Micael Mulugeta
                            </td>
                            <td>
                                Brother
                            </td>
                            <td>
                                mmulu@bu.edu
                            </td>
                        </tr>
                    </StyledTable>
            </main>
        </>
    )
}