import { useState } from "react";

function Home() {
  const [count, setCount]=useState(0)
  const b=()=>{setCount(count+1)};
    return (
      <>
      {count===0 ? (<p>no</p>):(<p>{count} times</p>)}
      <button onClick={b}>Button</button>
      </>
    );
  }
  
  export default Home;
  