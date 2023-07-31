import { useState } from 'react';
import './apiItem.css';
import {ReactComponent as ArrowLogo} from './down-arrow-svgrepo-com.svg'

function ApiItem({providerName,apiDetailFunc}) {

  const [apiDetail,setApiDetail] = useState();
  const [clickCount,setClickCount] = useState(0);
  const [showApiDetail,setShowApiDetail] = useState(false);

  async function  handleClick() {

    if (apiDetail == undefined) {
      fetchAPIDetails();
    }

    if (clickCount %2 == 1) {
      setShowApiDetail(false);
    } else {
      setShowApiDetail(true);
    }
    
    setClickCount(clickCount+1);

  }

  async function fetchAPIDetails() {
    try {
      const response = await fetch(
        `https://api.apis.guru/v2/${providerName}.json`
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setApiDetail(Object.values(result.apis));
    } catch (err) {

    } 
  }

  return (
    <div className="apiItem">
      <div>
        <span>
          {providerName}
          <button onClick={handleClick} className='arrowBtn'><ArrowLogo className={showApiDetail ? "arrowUp" : "arrow"}/></button>
        </span>
        
        
      </div>
      
      { showApiDetail &&
          apiDetail && 
              apiDetail.map((api) => (
                <div>
                  <p onClick={()=> apiDetailFunc(api.info)}>{api.info.title}</p>
                </div>
              ))
      }
    </div>
  );
}

export default ApiItem;
