import styled from 'styled-components'

const StyledHeader = styled.header`

    background-color: #450920;
    text-align: left;
    color: #F9DBBD;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    h1{
        margin: 10px;
        padding-top: 10px;
        color: #F9DBBD;
    }

    p{
        padding-bottom: 10px;
        color: #F9DBBD;
    }

    @media (max-width: 1000px) {
       text-align: center;
    }
`;
export default function Header() {
    return (
        <>
            <StyledHeader>
                <h1>
                    Victoria Mulugeta
                </h1>
                <p>
                    A website showcasing Victoria's accomplishments
                </p>
            </StyledHeader>
        </>
    )
}