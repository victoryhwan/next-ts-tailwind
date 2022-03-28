import React, { ReactNode } from 'react'
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import {getAllPostDir} from '../utils/mdxUtils'

import fs from 'fs';
import path from 'path';

type Props = {
    children?: SideProps
}

type SideProps = {
    title: string;
    gubun: string;
    path: string;
}

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
        for(let i=0; i<postList.length; i++){
            let obj = {
                title : `${postList[i].name}[${postList[i].postCnt}]`,
                gubun : "category",
                path : ""
            }
            rs.push(<SideBar_li key={i}>{obj}</SideBar_li>);
            for(let j=0; j<postList[i].posts.length; j++){
                let subTitle = postList[i].posts[j]+ ""
                let subObj = {
                    title : subTitle.substring(0,subTitle.length-4),
                    gubun : "post",
                    path : postList[i].name
                }
                rs.push(<SideBar_li key={`post${postList[i].name}_${j}`}>{subObj}</SideBar_li>);
            }
        }
        return rs
    }
    // fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden

    // fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden
    // fixed z-40 inset-0 flex-none bg-gray-200 w-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden

    //h-full overflow-hidden scrolling-touch lg:h-auto lg:block lg:relative lg:bg-transparent lg:top-18 mr-24 lg:mr-0
    //h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0

    //px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)
    //px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)
    return (
        
        <>            
            <div id="sidebar" className="absolute z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-gray-100 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden">
                <div id="navWrapper" className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
                    <div id="nav" className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
                        <ul>
                            <li className="mt-8">
                                <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">contents index list</h5>
                                <ul>
                                    {rendering()}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

function SideBar_li ({children}: Props){

    let title = children.title

    if(children.gubun == 'category'){
        return (
            <li>
                <a className="px-3 py-2 transition-colors duration-200 relative block text-gray-500 rounded-md">
                    {/* <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0">zz</span> */}
                    <span className="relative">{children.title}</span>
                </a>
            </li>
        )
    }else{
        return (
            <li>
                <Link href={`/post/${children.path}/${children.title}`}>
                    <a className="px-7 py-2 transition-colors duration-200 relative block hover:text-gray-900 hover:bg-yellow-200 text-gray-500 rounded-md">
                        {/* <span className="rounded-md absolute inset-0 bg-cyan-50 opacity-0">zz</span> */}
                        <span className="relative">{children.title}</span>
                    </a>
                </Link>
            </li>
        )
    }
}
export default Sidebar
// 
  