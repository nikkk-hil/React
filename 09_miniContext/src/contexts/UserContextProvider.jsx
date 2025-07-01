import React from "react";
import UserContext from "./UserContext.js";

//Wrapping children (i.e. login and profile component) in provider and passing values to the childrens
const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;