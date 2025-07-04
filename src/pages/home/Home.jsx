import { Showcase, Title, TopBar, BottomBar } from "./HomeStyles"

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

            <h4>vitrine</h4>

           </Showcase>

           <BottomBar>
            <h4>Referencias</h4>
           </BottomBar>
        </div>
    )
}