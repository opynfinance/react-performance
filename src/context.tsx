import React, { ReactElement, useContext } from 'react'

const initialState = {
  input: '',
  handleInput: (ip: string) => null
}

const appContext = React.createContext(initialState);
export const useApp = () => useContext(appContext)

const AppProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [input, setInput] = React.useState('')

  const handleInput = (ip: string) => {
    setInput(ip)
    return null
  }

  return (
    <appContext.Provider value={{ input, handleInput }}>
      {children}
    </appContext.Provider>
  )
}

export default AppProvider