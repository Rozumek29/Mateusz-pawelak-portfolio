import styled from 'styled-components';
import PotatoImg from '../../images/potato.png';
import Grid from '@mui/material/Grid';
import {NavLink} from "react-router-dom";

const HeaderContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  -webkit-box-shadow: 0px 10px 100px -40px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 10px 100px -40px rgba(66, 68, 90, 1);
  box-shadow: 0px 10px 100px -40px rgba(66, 68, 90, 1);
`;

const PotatoContainer = styled(Grid)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 0;
  overflow: hidden;
`;

const Potato = styled.img`
  position: absolute;
  width: 100px;

  &:first-child {
    transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    top: 55%;
    left: 25%;
    animation: potato-fade-in 0.5s ease-in-out 0s both;
  }

  &:nth-child(2) {
    animation: potato-rotation-from-top 1.3s ease-in-out 0s both;
    transform: rotate(200deg);
    top: -75%;
    left: 60%;
  }

  &:nth-child(3) {
    animation: potato-rotation-from-bottom 0.9s ease-in-out 0s both;
    transform: rotate(20deg);
    top: 35%;
    left: 90%;
  }
`;

const MenuContainer = styled(Grid)`
  height: 100%;
  width: 100%;
  align-items: center;
`;

const Menu = styled.ul`
  font-family: 'Cuprum', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 700;
  padding: 0 15px;
  height: 100%;
`;

const MenuLink = styled(NavLink)`
  color: #1e1e1e;
  margin: 0;
  text-decoration: none;
  &:after {
    content: '';
    display: block;
    height: 1.5px;
    background: #efb75b;
    transform: scaleX(0);
    transition: transform .3s;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover:after {
    transform: scaleX(1);
    transition: transform .3s;
  }
`;

const Header = () => {

    return (
        <HeaderContainer container xs={12}>
            <PotatoContainer item xs={8}>
                <Potato src={PotatoImg}/>
                <Potato src={PotatoImg}/>
                <Potato src={PotatoImg}/>
            </PotatoContainer>
            <MenuContainer item xs={4}>
                <Menu>
                    <MenuItem><MenuLink to={'/Mateusz-pawelak-portfolio'}>Home</MenuLink></MenuItem>
                    <MenuItem><MenuLink to={'/Mateusz-pawelak-portfolio/gallery'}>Portfolio</MenuLink></MenuItem>
                    <MenuItem><MenuLink to={'/Mateusz-pawelak-portfolio/contact'}>Contact</MenuLink></MenuItem>
                </Menu>
            </MenuContainer>
        </HeaderContainer>
    )
}

export default Header;