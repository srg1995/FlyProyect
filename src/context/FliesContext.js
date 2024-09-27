import React, { useState } from 'react'
import {getFlies} from '../services/getFlies';
const Context = React.createContext({})


export function FliesContextProvider({children}){

  const [flies, setFlies] = useState(getFlies());
  
  return <Context.Provider value={{flies, setFlies}}>
    {children}
  </Context.Provider>
}

export default Context;
