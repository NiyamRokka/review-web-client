import React from 'react'
import { AuthProvider } from '../context/auth.context'

interface IProps {
    children:React.ReactNode
    
}
const ContextProviders:React.FC<IProps> = ({children}) =>{
  return (
      <AuthProvider>
          { children}
    </AuthProvider>
  )
}

export default ContextProviders