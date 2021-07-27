import React ,{useState,useEffect} from "react";
import "./App.css";
import Dashboard from "./dashboard";
function App() {
  const [count, setCount] =useState(0);
  const [data, setData] = useState([])

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
const fetchData =async()=>{
  debugger
 let fetchData = await fetch('/dashboard')
 let jsonResponseData = fetchData.json()
 console.log(jsonResponseData)
 
}

  useEffect(()=>{
      fetchData()
  })

  return (
    <>
      {console.log(data)}
      <p>{count}</p>
      <button style={{backgroundColor :'red'}} onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
