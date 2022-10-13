import ArtsList from "./components/ArtsList";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {artsData} from "../../arts/artsData";

const PortfolioContainer = styled(Grid)`
  width: 100%;
  height: 100%;
`;

const Gallery = () => {
    const [artList, setArtList] = useState([]);

    useEffect(() => {
        document.title = "Mateusz Pawelak | Portfolio";
        setArtList(artsData);
    }, []);

    return (
        <PortfolioContainer item>
            <ArtsList artList={artList}/>
        </PortfolioContainer>
    )
}

export default Gallery;