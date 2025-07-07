import styled from "styled-components";

export const TopBar = styled.div`
background-color:white;
display: flex;
flex-direction: row;
justify-content:space-around;
align-items: center;
height: 70px;
border-radius: 20px;
margin-bottom: 15px;
`

export const Title = styled.h1`
color: blue;
padding: auto;
`
export const Showcase = styled.div`
background-color: white;
border-radius: 20px;
margin: 10px;
min-height: 580px;
display: flex;
flex-flow: row wrap;
justify-content: space-around;
`
export const GamePath = styled.div`
background-color: red;
height: 200px;
width: 300px;
margin: 20px;
`
export const BottomBar = styled.footer`
background-color: white;
border-radius: 20px;
margin-top: 15px;
`