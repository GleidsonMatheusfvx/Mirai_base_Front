import styled from "styled-components";
import { NavLink } from "react-router";

export const DivH =styled.div`
ul{
    list-style-type: none;
    font-size: 20px;
}
`
export const GamePath = styled.div`
background-color: red;
display: flex;

height: 200px;
width: 300px;
margin: 20px;
`
export const NavL = styled(NavLink)`
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
  color: ${({ $isActive }) => ($isActive ? 'blue' : 'black')};
`;