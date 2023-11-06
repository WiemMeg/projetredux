
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Filter } from './Redux/Actions/Actions';
import LisTask from './Components/ListTask';
import Addtask from './Components/Addtask';

function App() {
const dispatch = useDispatch()

  return (
  <div className="App">
  <h2>filter by done :</h2>
  <input type="checkbox" onClick={()=>dispatch(Filter())}/>

<Addtask />
<LisTask />
    </div>
  );
}

export default App;
