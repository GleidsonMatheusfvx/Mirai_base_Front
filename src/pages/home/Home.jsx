import {GamePath, DivH } from "./HomeStyles"
import { TopBar, Showcase, BottomBar, Title } from "../../styles/globalStyles"
import Search from "../../components/forms/Forms"
import { Link } from "react-router"

export default function Home(){
    return (
        <DivH>
           <TopBar>

            <Title>Mirai base</Title>

            <Search/>

           </TopBar>

           <Showcase flowh="row wrap" contenth="space-around">

            <GamePath>
                <Link to="/Game"><a >
                    <ul>
                    {/*<li><Image src="" alt=""/></li>*/}
                    <li>Jogo da velha</li>
                </ul>
                </a></Link>
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