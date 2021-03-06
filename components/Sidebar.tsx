import React, { ReactNode } from 'react'
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import {getAllPostDir} from '../utils/mdxUtils'

import fs from 'fs';
import path from 'path';
import Button from '@mui/material/Button';

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
        //hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto
        //absolute z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-gray-100 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden
        //hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto
        <>            
            <div id="sidebar" className="sticky top-[30px] z-40 flex-none bg-black bg-opacity-25 w-full lg:bg-blue-100 lg:pt-0 lg:w-60 xl:w-72 lg:block hidden h-[100vh]">
                
                <div id="navWrapper" className="overflow-y-auto h-[90%] scrolling-touch lg:block lg:bg-transparent lg:top-20 bg-white mr-24 lg:mr-0 ">
                    <div className='h-10 bg-yellow-100'>
                        <h5 className="px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900">contents index list</h5>
                    </div>
                    <div id="nav" className="px-1 pt-6 font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14">
                        <nav className=''>
                            <ul>
                                <li className="mt-8">
                                    <ol>
                                        {rendering()}
                                    </ol>
                                    <ol>
                                        {rendering()}
                                    </ol>
                                    <ol>
                                        {rendering()}
                                    </ol>
                                    <ol>
                                        {rendering()}
                                    </ol>

                                </li>
                                <li className="mt-8">
                                    <ol>
                                        {rendering()}
                                    </ol>
                                    <ol>
                                        {rendering()}
                                    </ol>
                                    <ol>
                                        {rendering()}
                                    </ol>
                                    <ol>
                                        {rendering()}
                                    </ol>

                                </li>
                            </ul>
                        </nav>
                        
                        <Button variant="contained" className='bg-black hover:bg-gray-500' >Text</Button>
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
  