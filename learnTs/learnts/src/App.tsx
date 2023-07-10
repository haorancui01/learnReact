import { Person, Country } from './components/Person';
import './App.css';

function App() {
  return (
    <div className="App">
     <Person
        name="aa"
        email="as@as.com"
        age={21}
        isMarried={true}
        friends={["jake", "jess", "jeer"]}
        country={Country.Brazil}
     />
    </div>
  );
}

export default App;
