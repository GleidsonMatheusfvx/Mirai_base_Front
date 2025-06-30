import { Title } from "./styles"
import { Head } from "./styles"

export default function Home(){
    return (
        <div>
           <Head>

            <Title>Mirai base</Title>

            <form>
                <input type="text" placeholder="search..."/>
            </form>

           </Head>
        </div>
    )
}