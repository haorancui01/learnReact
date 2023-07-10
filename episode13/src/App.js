import PropTypes from "prop-types";

import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="Psd@ads.com"
        age={21}
        isMarried={true}
        friends={["jess", "jak", "jer", "jas"]}
      />
    </div>
  );
}

export default App;
