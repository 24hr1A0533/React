import { useState } from "react";
import App from "./App.jsx";
function Fire(){
    const[name,getName]=useState("");
    return(
        <>
        <label>
            Name: <input type="text" onChange={(e) => 
                getName(e.target.value)
            }></input>
        </label>
        <h2>{name}</h2>
        </>
    );
}
function Master(){
    const [rename,setname]=useState("kishore");
    return(
        <>
        <h1>{rename}</h1>
        <button style={{width:"fit-content"}} onDoubleClick={() => setname("Anil")}>
        change name
        </button>
        </>
    );
}
function Classic1()
{
    const[show , setshow]=useState(false);
    return (
        <>
        <button
         onClick={()=>setshow(!show)}
        >Reveal</button>
        {show && <App></App>}
        </>
    );
}

function Classic(){
    const [count,setCount]=useState(0); 
    return(
        <>
        <h1>count:{count}</h1>
        <button style={{width:"fit-content"}} onClick={() => setCount(count+1)}>
        increase
        </button><br/>
         <button style={{width:"fit-content"}} onClick={() => setCount(count-1)}>
        decrease
        </button>
        <Master></Master>
        <Fire/>
        <Classic1/>
        </>
    );
}
export default Classic;