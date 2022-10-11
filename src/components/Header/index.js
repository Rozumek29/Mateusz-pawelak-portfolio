import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: aquamarine;
  margin: 0;
`;

const Header = () => {
    return (
        <HeaderContainer>
            Header
        </HeaderContainer>
    )
}

export default Header;