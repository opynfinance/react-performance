import React from 'react'
import { useApp } from '../context'

const InputForm: React.FC = () => {
  const { input, handleInput } = useApp()

  return (
    <div>
      <input value={input} onChange={(e) => handleInput(e.target.value)} />
    </div>
  )
}

export default InputForm