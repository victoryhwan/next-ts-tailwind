import React, { ReactNode } from 'react'
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import {getAllPostDir} from '../utils/mdxUtils'

import fs from 'fs';
import path from 'path';

type Props = {
    children?: PostItem
}

// type SideProps = {
//     title: string;
//     gubun: string;
//     path: string;
// }

// type SideProps2 = {
//     children?: PostItem
// }

type PostItem = {
    name?: string
    postCnt?: number
    posts?: []
}

type PostListProps = {
    postList?:PostItem []
}

const Sidebar = ({postList}:PostListProps)=>{

    const rendering = () => {
        const rs = []
        
        // console.log(`rendering`)
        for(let i=0; i<postList.length; i++){
            rs.push(<SideBar_li key={i}>{postList[i]}</SideBar_li>);
        }
        return rs
    }

    return (
        
        <>            
            <div id="sidebar" className="absolute z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-gray-100 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden">
                <div id="navWrapper" className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
                    <div id="nav" className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
                        <ul>
                            <li className="mt-8">
                                <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">contents index list</h5>
                                <ol>
                                    {rendering()}
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function SideBar_li ({children}: Props){

    // console.log(`SideBar_li_v2`, children)
    let summaryTitle = `${children.name}(${children.postCnt})`
    return (
        <li className="toggle">
            <details>
                <summary>{summaryTitle}</summary>
                <ol>
                    {
                        children.posts.map((item :String, idx)=>{
                            let title = item.substring(0,item.length-4)
                            return (
                                <li key={idx}>
                                    <Link href={`/post/${children.name}/${title}`}>
                                        <a className='side-menu-item'>
                                            <span className="relative">{title}</span>
                                        </a>
                                    </Link>
                                </li>        
                            )
                        })
                    }
                </ol>
            </details>
        </li>
    )
}

export default Sidebar
// 
  