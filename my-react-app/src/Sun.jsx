import UserContext from "./Context.js";
import Recieve from "./recieve.jsx"

function Variant()
{
    return (
        <UserContext.Provider value="Sivani">
            <Recieve></Recieve>
        </UserContext.Provider>
    );
}
export default Variant;