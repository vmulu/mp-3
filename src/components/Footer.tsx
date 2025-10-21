import styled from 'styled-components'

const StyledFooter = styled.footer`

    background-color: #450920;
    text-align: left;
    color: #F9DBBD;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    p{
        padding-bottom: 10px;
    }

    @media (max-width: 1000px) {
       text-align: center;
    }
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p> All Rights Reserved by Victoria Mulugeta <a href="">Credits</a> &#169; </p>
            </StyledFooter>
        </>
    )
}