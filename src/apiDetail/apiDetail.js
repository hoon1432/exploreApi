import './apiDetail.css';

function ApiDetail({apiData}) {

  function shouldShowContact(apiData) {
    return apiData.contact && 
      (apiData.contact.email !== undefined ||
        apiData.contact.name !== undefined ||
        apiData.contact.url !== undefined)
  }

  var showContact = shouldShowContact(apiData);

  return (
    <div className="apiDetail">
      {apiData.description && 
        <div>
          <h2>Description</h2>
          <p>{apiData.description}</p>
        </div>
      }
      {apiData.swaggerUrl && 
        <div>
          <h2>Swagger</h2>
          <p>{apiData.swaggerUrl}</p>
        </div>
      }
      {showContact &&
        <h2>Contact</h2>
      }
      {showContact && 
       apiData.contact.email &&
       <p>Email: {apiData.contact.email}</p>}

      {showContact && 
        apiData.contact.name &&
        <p>Email: {apiData.contact.name}</p>}
      
      {showContact && 
       apiData.contact.url &&
        <p>Email: {apiData.contact.url}</p>}

    </div>
    
  );
}

export default ApiDetail;
