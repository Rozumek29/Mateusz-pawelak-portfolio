import styled from 'styled-components'
import PhotoImg from '../../../../images/photo.png'

const Photo = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 30px;
`;
const TitlesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-transform: uppercase;
  padding: 10px;
  margin: 0;
`;
const FirstRow = styled.h1`
  margin: 0;
  font-weight: 600;
  color: black;
  letter-spacing: 0.5rem;
  font-size: 26px;
`;
const SecondRow = styled.h1`
  color: lightgray;
  margin: 0;
  letter-spacing: 0.2rem;
  font-size: 20px;
  font-weight: 400;
`;
const ThirdRow = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
`;

const Avatar = () => {
    return (
        <>
            <Photo src={PhotoImg} alt="Photo"/>
            <TitlesContainer>
                <FirstRow>Metramin</FirstRow>
                <SecondRow>Mateusz Pawelak</SecondRow>
                <ThirdRow>Concept artist / illustrator</ThirdRow>
            </TitlesContainer>
        </>
    )
}

export default Avatar;