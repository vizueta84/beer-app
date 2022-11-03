import React, {useState, useEffect,} from "react"
import BeerList from "./components/BeerList";
import './App.css';


export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [beers, setBeers] = useState([]);
  
useEffect(()=> {
  fetch("https://api.punkapi.com/v2/beers")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    setBeers(data)
  })
}, [])

useEffect(()=> {}, [])

useEffect(()=> {}, [])

  const handleIsClicked = () => {
    setIsClicked(!isClicked)
  }
  
  return (
    <div className="App">
      {/* <h1> Hello World {isClicked === true ? "world" : "Code "}</h1>
      <button onClick= {handleIsClicked}>toggle</button> */}
      <BeerList beers={beers}/>
    
    
    </div>
  );
}


