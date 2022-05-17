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
                <div className="lg:flex overflow-hidden">
                    <Sidebar />
                    <MainContent>{children}</MainContent>
                </div>
            </div>
        </>
    )
}

function MainContent (props:Props){
    return (
        //min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16
        //min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible
        <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16 overflow-y-auto">
            {props.children}
        </div>
    )
}

export default Body