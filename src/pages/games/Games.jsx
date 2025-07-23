import Search from "../../components/forms/Forms";
import { TopBar, Showcase, BottomBar, Title } from "../../styles/globalStyles";
import { DivG, GameScreen } from "./GamesStyles";

export default function Game(){
    return(
        <DivG>
            <TopBar>
                
            <Title>Mirai base</Title>

            <Search/>

            </TopBar>
            <Showcase displayh="flex" contenth="center">
                <GameScreen></GameScreen>
            </Showcase>
            <BottomBar>
            <h4>Referencias</h4>
            </BottomBar>
        </DivG>
    )
}