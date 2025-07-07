import { Showcase, Title, TopBar, BottomBar, GamePath } from "./HomeStyles"

export default function Home(){
    return (
        <div>
           <TopBar>

            <Title>Mirai base</Title>

            <form>
                <input type="text" placeholder="search..."/>
            </form>

           </TopBar>

           <Showcase>

            <GamePath></GamePath>
            <GamePath></GamePath>
            <GamePath></GamePath>
            <GamePath></GamePath>
            <GamePath></GamePath>

           </Showcase>

           <BottomBar>
            <h4>Referencias</h4>
           </BottomBar>
        </div>
    )
}