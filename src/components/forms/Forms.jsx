import Logout from "../buttons/Buttons";
import { InputS } from "./FormsStyles";


export default function MultiF(){
    return(
        <form>
           <InputS type="text" placeholder="search..."/>

           <Logout/>
        </form>
    )
}