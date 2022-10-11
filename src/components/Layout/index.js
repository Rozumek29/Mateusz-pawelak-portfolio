import Grid from "@mui/material/Grid";
import Header from "../Header";
import {Routes, Route} from 'react-router-dom';
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import styled from "styled-components";

const ContentContainer = styled(Grid)`
  width: 99%;
  height: 99%;
  padding: 1%;
`;

const AppLayout = () => {
    return (
        <Grid container width={"100vw"} height={"100vh"}>
            <Grid container xs={12} height={"10%"}>
                <Header/>
            </Grid>
            <ContentContainer item xs={12} height={"90%"}>
                <Routes>
                    <Route path="/Mateusz-pawelak-portfolio" element={<Home/>}/>
                    <Route path={"/Mateusz-pawelak-portfolio/gallery"} element={<Gallery/>}/>
                    <Route path={"/Mateusz-pawelak-portfolio/contact"} element={<Contact/>}/>
                </Routes>
            </ContentContainer>
        </Grid>
    )
        ;
}

export default AppLayout;