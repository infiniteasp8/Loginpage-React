import React from "react";
import Login from "./Login";
import Register from "./Register";


var isRegistered = false;
 
function App () {  
    return(
    <div className="container">
        {isRegistered ? <Login />:<Register />}
    </div>
    );
}

export default App;