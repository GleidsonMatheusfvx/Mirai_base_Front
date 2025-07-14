import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    
  }

body{
    background-color: black;
}

`
export const TopBar = styled.div`
background-color:white;
display: flex;
flex-direction: row;
justify-content:space-around;
align-items: center;
height: 70px;
border-radius: 20px;
margin-top: 5px;
margin-bottom: 15px;
`
export const Showcase = styled.div`
background-color: white;
border-radius: 20px;
margin: 10px;
min-height: 580px;
display: flex;
flex-flow: ${props => props.flowh || "column nowrap"};
justify-content: ${props => props.contenth || "center"};
align-items: center;
`

export const BottomBar = styled.footer`
background-color: white;
border-radius: 20px;
margin-top: 15px;
margin-bottom: 5px;
`
export const Title = styled.h1`
color: blue;
padding: auto;
`