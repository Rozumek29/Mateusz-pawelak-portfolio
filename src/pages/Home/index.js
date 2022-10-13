import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Avatar from "./components/PhotoComponent";
import {useEffect} from "react";

const FirstSectionContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 33%;
`;

const Home = () => {

    useEffect(() => {
      document.title = "Mateusz Pawelak | Home";
    }, []);

  return (
      <>
         <FirstSectionContainer item xs={12}>
            <Avatar/>
         </FirstSectionContainer>
      </>
  )
}

export default Home;