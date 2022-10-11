import Grid from "@mui/material/Grid";
import Header from "../Header";
import {Routes, Route} from 'react-router-dom';
import Home from "../../pages/Home";
import Gallery from "../../pages/Gallery";

const AppLayout = () => {
    return (
        <Grid container width={"100vw"} height={"100vh"}>
            <Grid container xs={12} height={"5%"}>
                <Header/>
            </Grid>
            <Grid item xs={12} height={"95%"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"/gallery"} element={<Gallery/>}/>
                </Routes>
            </Grid>
        </Grid>
    )
        ;
}

export default AppLayout;