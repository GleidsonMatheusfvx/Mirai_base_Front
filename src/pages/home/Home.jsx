import {GamePath, DivH, NavL} from "./HomeStyles"
import { Showcase, BottomBar, Title } from "../../styles/globalStyles"
import MultiF from "../../components/forms/Forms"


export default function Home(){
    return (
        <DivH>
           <div class="topBar">

            <Title>Mirai base</Title>

            <MultiF/>

           </div>

           <Showcase flowh="row wrap" contenth="space-around">

            <GamePath>
              <nav>
                  <NavL to="/Game"className={({ isActive }) => (isActive ? "active" : "")}>
                    <ul>
                      <li>Jogo da velha</li>
                    </ul>
                  </NavL>
             </nav>
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