import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Hadding></Hadding>
      <Paragrap></Paragrap>
      
      <Mobaile></Mobaile>

      <Todos></Todos>
    </div>
  );
}

function Hadding (){
  return(
    <div className='blog'>
      <h1>Hello pratice react1</h1>

    </div>
  )
}

function Paragrap(){
  return(
    <div className='paragrap'>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
      We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
      Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
      React can also render on the server using Node and power mobile apps using React Native.
      Declarative views make your code more predictable and easier to debug.
      </p>
    </div>
  )
}

function Mobaile (){
  const [charge, setCharge] = useState(100);

  const handleCharg =()=>{

    const newcharge= charge - 10;

    setCharge(newcharge);

  }
  const pluseCharge =()=>{
    const loadcharge= charge + 10;
    setCharge(loadcharge) 
  }

  return(
    <div>
      <p className='btary'>{charge}%</p>
      <button className='btn' onClick={handleCharg}>lave charging</button>
      <button className='btn2' onClick={pluseCharge}>pluse charging</button>
    </div>
  )

  
}

function Todos (){
  const [jsons, setJesons]= useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=> setJesons(data))

  },[])

  return(
    <div>
      <h1>lenght:{jsons.length}</h1>
      {
        jsons.map(jeson =><Datelies title={jeson.title} thumbnailUrl={jeson.thumbnailUrl} id={jeson.id}></Datelies>
        )
      }
    </div>
  )
}
function Datelies (props){
  return(
    <div>
      <h3>{props.title}</h3>
      <img src={props.thumbnailUrl}/>
      <p>id:{props.id}</p>
    </div>
  )
}

export default App;
