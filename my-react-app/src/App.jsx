function app(){
  const name="birds";
  let num1=32;
  let num2=12;
  let num=num1+num2;
  let age=18;
  let userage=20;
 
  return (
    <>
   
     <h1 style={{color:"blue"}}>{name}</h1>
     <img style={{width:200 }} src="https://i.pinimg.com/736x/f5/c6/44/f5c64491f00b39bad88318df35a745b3--colorful-birds-exotic-birds.jpg" alt="something wrong" />
    <p className="Avian"> peacock is a beautyful bird 
      it have {num} 
    </p>
     {
      (userage>age)?<p>"user logged in" </p>:<p>"invalid user"</p>
    }
    <button onDoubleClick={()=>{
    alert("warning 💀");
  
  }} style={{width:"fit-content"}}
    >Danger</button>
    </>
  );
} 
export default app;