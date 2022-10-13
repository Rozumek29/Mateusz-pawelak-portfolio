import ArtsList from "./components/ArtsList";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import {useEffect, useState} from "react";

const PortfolioContainer = styled(Grid)`
  width: 100%;
  height: 100%;
`;

function getAllImages() {
    const r = require.context('../../arts', false, /\.(png|jpe?g|svg)$/);
    return r.keys().map(r);
}

const Gallery = () => {
    const [artList, setArtList] = useState([]);

    useEffect(() => {
        document.title = "Mateusz Pawelak | Portfolio";
        if (artList.length < 1) {
            let tempArtList = [];
            let images = getAllImages();
            images.map((image) => {
                let tempImg = new Image();
                tempImg.onload = () => {
                    tempArtList.push({
                        src: image,
                        width: tempImg.width,
                        height: tempImg.height,
                    });
                    setArtList(tempArtList);
                }
                tempImg.src = image;
            })
            setArtList(tempArtList);
        }
    }, []);

    return (
        <PortfolioContainer item>
            <ArtsList artList={artList}/>
        </PortfolioContainer>
    )
}

export default Gallery;