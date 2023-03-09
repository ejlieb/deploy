import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {

  const [searchVal, setSearchVal] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const searchValue = (e) => {
    console.log(e.target.value);
    setSearchVal(e.target.value);
  }

  const search = () => {
    setSearchQuery(searchVal);
  }

  return (
    <div className="App">
      <div className='filter-container'>
        <div className="filter-bar">
            <label><input type="checkbox" value="CC301E"/> CC301E</label>
            <label><input type="checkbox" value="D44028"/> D44028</label>
            <label><input type="checkbox" value="B30000"/> B30000</label>
            <label><input type="checkbox" value="B70805"/> B70805</label>
            <label><input type="checkbox" value="BB100A"/> BB100A</label>
            <label><input type="checkbox" value="D8482D"/> D8482D</label>
        </div>
        <div className="search-bar">
            <input type="text" onChange={searchValue}></input>
            <button onClick={search}>submit</button>
        </div>
      </div>
      <div className='container'>
        <div id="sigma-container">
          <Chart searchquery={searchQuery}/>
        </div>
        <div id="sigma-container">
          <Chart/>
        </div>
      </div>
      
    </div>
  );
}

export default App;