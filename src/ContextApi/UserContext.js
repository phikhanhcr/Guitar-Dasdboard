import React from 'react'

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsume = UserContext.Consumer;

export {
  UserProvider, 
  UserConsume,
  UserContext
}