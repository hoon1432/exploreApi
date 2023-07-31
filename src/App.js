import React, { useState } from "react";
import './App.css';
import Sidebar from './sidebar/sidebar';
import ApiDetail from "./apiDetail/apiDetail";

function App() {

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isApiDetailVisible, setApiDetailVisible] = useState(true);
  const [apiDetail,setApiDetail] = useState();

  function  handleExploreBtn() {
    setSidebarVisible(true)
    setApiDetailVisible(false)

  }

  function handleApiDetail(detail) {
    setApiDetail(detail);
    setSidebarVisible(false);
    setApiDetailVisible(true)
  }

  return (
    <div className="App">
      <div className="App-header">
        {isApiDetailVisible &&
          apiDetail &&
          <ApiDetail apiData={apiDetail}></ApiDetail>
        }
        <button className='clickButton' onClick={handleExploreBtn}>Explore web APIs</button>
      </div>
      <div className="App-header">
        {isSidebarVisible &&
          <Sidebar apiDetailFunc={handleApiDetail}></Sidebar>
        }
      </div>
      
    </div>
  );
}

export default App;
