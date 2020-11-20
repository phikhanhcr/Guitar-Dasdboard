import React from 'react'

const CatalogsContext = React.createContext();

const CatalogsProvider = CatalogsContext.Provider;
const CatalogsConsume = CatalogsContext.Consumer;

export {
  CatalogsProvider, 
  CatalogsConsume,
  CatalogsContext
}