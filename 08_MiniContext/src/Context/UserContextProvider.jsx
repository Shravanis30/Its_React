import React from "react";
import UserContext from "./UserContext";


// childern is the generic word it does the work to pass the data it recives (not neccesary to be named as childern but usally used in states and all so used )
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return(
         // this is wraping (providing)
        //  the value set inside is set in {object} so we can pass as much as value (this passing specifices the access of the value)
        <UserContext.Provider value={{user, setUser}}>   
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider