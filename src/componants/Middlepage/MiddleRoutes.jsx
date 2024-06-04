import Index from "../Index"
import Messages from "../tools/Messages"
import Middle from "./Middle"


export default function MiddleRoutes(){
    return(
        <switch >
            <Route path='' element={<Middle />} />
            <Route path='messages' element={<Messages/>} />
        </switch>    
    )
}