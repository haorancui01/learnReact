import './App.css';
import { User } from './User'
import { Planet } from './Planet'


function App() {
  const users = [
    { name: "Pedro", age: 21},
    { name: "Jake", age: 25},
    { name: "Jessica", age: 45},
  ];

  const planet = [
    { name: "Mars", isGasPLanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Neptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true},
  ];

  return (
    <div className="App">
    {/* {users.map((user, key) => {
      return <User name={user.name} age={user.age}/>
    })} */}

    {planet.map((planet, key) => {
      if (planet.isGasPlanet) return <Planet name={planet.name}/>
    })}
     </div>
  );
}




export default App;
