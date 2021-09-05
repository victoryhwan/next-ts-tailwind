import Sidebar from './Sidebar'
import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode
    title?: string
  }

const Body = ({children}: Props)=>{
    return (
        <>            
            <div className="container mx-auto max-w-7xl">
                <div className="lg:flex">
                    <Sidebar/>
                    <MainContent>{children}</MainContent>
                </div>
            </div>
        </>
    )
}

function MainContent (props:Props){
    return (
        <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
            {props.children}
        </div>
    )
}

export default Body