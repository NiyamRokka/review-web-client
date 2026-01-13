import React from 'react'
import ContextProviders from './contextprovider'
import ReactQueryProvider from './reactqueryprovider'

interface IProps {
    children: React.ReactNode

}
const Providers: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <ReactQueryProvider>
                <ContextProviders>
                    {children}
                </ContextProviders>
            </ReactQueryProvider>
        </>
    )
}

export default Providers