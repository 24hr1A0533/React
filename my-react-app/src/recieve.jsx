import { useContext } from "react";
import UserContext from "./Context.js";
function Shiro(){
    const shinchan = useContext(UserContext);
    return(
        <h1>{shinchan}</h1>
    );
}
export default Shiro;