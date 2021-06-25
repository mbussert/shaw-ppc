import React, { useState, useEffect } from "react";
import NotFound from "../../components/NotFound";
import API from "../../utils/API";


function PageNotFound() {

    const [loginStatus, setLoginStatus] = useState([]);

    useEffect(() => {
      loadStatus();
    }, []);
  
    function loadStatus() {
  
      API.authenticateUser()
        .then((response) => {
          setLoginStatus(response.data.login);
        })
        .catch((err) => console.log(err));
    }
    
    return (
        <div>
            <NotFound/>
        </div>
    );
}

export default PageNotFound;