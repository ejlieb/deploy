import { useState } from 'react';
import './App.css';
import Chart from './components/Chart';

function App() {

  const [searchVal, setSearchVal] = useState();

  const searchValue = (e) => {
    console.log(e.target.value)
    setSearchVal(e.target.value)
  }

  const search = () => {
    console.log(searchVal)
  }
  return (
    <div className="App">
      <div className="search-bar">
          <input type="text" onChange={searchValue}></input>
          <button onClick={search}>submit</button>
      </div>
      <div className='container'>
        <div id="sigma-container">
          <Chart/>
        </div>
        <div id="sigma-container">
          <Chart/>
        </div>
      </div>
      
    </div>
  );
}

export default App;