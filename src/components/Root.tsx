import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Ref from "./mains/Ref.tsx";
import Employ from "./mains/Employ.tsx"
import Clubs from "./mains/Clubs.tsx";
import Projects from "./mains/Projects.tsx";

import {Route, Routes} from "react-router";

export default function Root(){
    return (
        <>
            <Header/>
            <Nav/>
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/education`} element={<Edu/>}/>
                <Route path={`/employment`} element={<Employ/>}/>
                <Route path={`/clubs`} element={<Clubs/>}/>
                <Route path={`/references`} element={<Ref/>}/>
                <Route path={`/projects`} element={<Projects/>}/>
            </Routes>
            <Footer/>
        </>
    )
}