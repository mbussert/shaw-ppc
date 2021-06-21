import React, {useState} from "react";

function Header() {
  const [show,setShow]=useState(true)
  return (
    <header>
      {show?
      <h1 className="header-text">
        <span style={{color: "#da9f63"}}>SHAW</span> 
        <span style={{color: "#a3becf"}}>PPC</span>   
        <span style={{color: "white"}}> DESIGN</span>
      </h1>:null}
    </header>
  );
}

export default Header;

// onClick={()=>setShow(!show)}
