import React from 'react'

const MusicalInstrumentContext = React.createContext();

const MusicalInstrumentProvider = MusicalInstrumentContext.Provider;
const MusicalInstrumentConsume = MusicalInstrumentContext.Consumer;

export {
  MusicalInstrumentProvider, 
  MusicalInstrumentConsume,
  MusicalInstrumentContext
}