import React, { ReactNode } from 'react'
type Props = {
    children?: ReactNode
    p_title?: string
}

const Sidebar = ({children}:Props)=>{
    return (
        <>            
            <div id="sidebar" className="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden">
                <div id="navWrapper" className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 mr-24 lg:mr-0">
                    <div id="nav" className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
                        <ul>
                            <li className="mt-8">
                                <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">Getting started</h5>
                                <ul>
                                    <SideBar_li p_title="이기환">Installation</SideBar_li>
                                    <SideBar_li>Release Notes</SideBar_li>
                                    <SideBar_li>Upgrade Guide</SideBar_li>
                                    <SideBar_li>Editor Support</SideBar_li>
                                    <SideBar_li>Using with Preprocessorse</SideBar_li>
                                    <SideBar_li>Optimizing for Production</SideBar_li>
                                    <SideBar_li>Browser Support</SideBar_li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function SideBar_li ({children, p_title=''}: Props){
    return (
        <li>
            <a className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 hover:bg-yellow-200 text-gray-500 rounded-md" href="https://github.com/tailwindlabs/tailwindcss/releases">
                {/* <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0">zz</span> */}
                <span className="relative">{children+p_title}</span>
            </a>
        </li>
    )
}
export default Sidebar