import Nav from './Nav'
import Footer from './Footer'
import Body from './Body'
import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode
    title?: string
  }

const Layout = ({children}: Props )=>{
    return (
        <>            
            <Nav/>
            <Body>{children}</Body>
            <Footer/>
        </>
    )
}

export default Layout