import { Title, GamePath, DivH } from "./HomeStyles"
import { TopBar, Showcase, BottomBar } from "../../styles/globalStyles"

export default function Home(){
    return (
        <DivH>
           <TopBar>

            <Title>Mirai base</Title>

            <form>
                <input type="text" placeholder="search..."/>
            </form>

           </TopBar>

           <Showcase displayh="flex" flowh="row wrap" contenth="space-around">

            <GamePath>
                <ul>
                    {/*<li><Image src="" alt=""/></li>*/}
                    <li>Jogo da velha</li>
                </ul>
            </GamePath>
            <GamePath></GamePath>
            <GamePath></GamePath>
            <GamePath></GamePath>
            <GamePath></GamePath>

           </Showcase>

           <BottomBar>
            <h4>Referencias</h4>
           </BottomBar>
        </DivH>
    )
}