import MultiF from "../../components/forms/Forms";
import {Showcase, BottomBar, Title } from "../../styles/globalStyles";
import { DivG, GameScreen } from "./GamesStyles";

export default function Game(){
    return(
        <DivG>
            <div class="topBar">
                
            <Title>Mirai base</Title>

            <MultiF/>

            </div>
            <Showcase displayh="flex" contenth="center">
                <GameScreen></GameScreen>
            </Showcase>
            <BottomBar>
            <h4>Referencias</h4>
            </BottomBar>
        </DivG>
    )
}