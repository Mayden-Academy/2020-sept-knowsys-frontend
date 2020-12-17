import React from 'react';

// Gives us access to:
// UserContext.Provider (This goes in the top common ancestor)
// UserContext.Consumer (Where you actually want to get access to the data)
const UserContext = React.createContext()

export default UserContext