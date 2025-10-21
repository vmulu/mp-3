import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledNav = styled.nav`
    background-color: #A53860;
    width: 300px;
    display: flex;
    justify-content: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    height: calc(100vh - 80px);
    top: 80px;

    ul {
        padding-left: 0;
        list-style: none;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li {
        border: 5px solid #450920;
        border-radius: 50%;
        padding: 2%;
        width: 80%;
        margin: 15px;
    }

    a{
        text-decoration: none;
        color: #F9DBBD;
    }

    @media (max-width: 1000px) {
        top: auto;
        width: 100%;
        height: auto;

        ul {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.75rem;
            width: 100%;
        }

        li {
            width: auto;
            margin: 0;
            min-width: 0;
        }

        a {
            font-size: 12px;
        }
    }
`;

export default function Nav(){
    return (
        <>
            <StyledNav>
                <ul>
                    <li><Link to={`/`}> Home </Link></li>
                    <li><Link to={`/education`}> Education </Link></li>
                    <li><Link to={`/employment`}> Employment </Link></li>
                    <li><Link to={`/clubs`}> Clubs </Link></li>
                    <li><Link to={`/references`}> References </Link></li>
                    <li><Link to={`/projects`}> Projects </Link></li>
                </ul>
            </StyledNav>
        </>
    )
}