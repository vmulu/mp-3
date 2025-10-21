import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Ref from "./mains/Ref.tsx";
import Employ from "./mains/Employ.tsx"
import Clubs from "./mains/Clubs.tsx";
import Projects from "./mains/Projects.tsx";

import styled from "styled-components";

import {Route, Routes} from "react-router";

const StyledBody = styled.div`
  display: flex;
  min-height: calc(100vh - 80px - 0px);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledSidebar = styled.aside`
  width: 300px;
  background: #A53860;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledMain = styled.main`
  flex: 1;
  background: #FFA5AB;
  padding: 2rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default function Root(){
    return (
        <>
                <Header/>
                <StyledBody>
                    <StyledSidebar>
                        <Nav />
                    </StyledSidebar>
                    <StyledMain>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/education" element={<Edu />} />
                            <Route path="/employment" element={<Employ />} />
                            <Route path="/clubs" element={<Clubs />} />
                            <Route path="/references" element={<Ref />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </StyledMain>
                </StyledBody>
                <Footer/>

        </>
    )
}