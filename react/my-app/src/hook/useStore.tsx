import React from "react"
import store from '../store'

type Store = typeof store;
const storeContext = React.createContext<typeof store>(null)

export const StoreProvider = ({children}) => {
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export function useStore<K extends keyof Store>(key?: K){
  const store = React.useContext(storeContext)
  if(!store){
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store[key];
}

