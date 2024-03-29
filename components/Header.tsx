import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState, useEffect} from 'react';
import { RiArrowUpSLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";


type Props = {
    children?: PostItem,
    sideView: Boolean,
    setSideView: any
}

type PostItem = {
    name?: string
    postCnt?: number
    posts?: []
}

type PostListProps = {
    postList?:PostItem []
}

const Header = ({postList}:PostListProps)=>{

    // console.log(`rendering`,postList)
    const [sideView, setSideView] = useState(false);
        
    useEffect(() => {
        if(sideView){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "unset";
        }
      }, [sideView]);

    const rendering = () => {
        const rs = []
        
        // console.log(`rendering`,postList)
        // console.log(`rendering:${JSON.stringify(postList)}`)
        for(let i=0; i<postList.length; i++){
            // rs.push(<li key={i}><AccordionMenu>{postList[i]}</AccordionMenu></li>);
            let propsObj = {
                post : postList[i]
            }
            rs.push(<li key={i}><AccordionMenu children={postList[i]} sideView={sideView} setSideView={setSideView}/></li>);
        }
        return rs
    }

    return (
        <header className="sticky w-full top-0 z-50 grid grid-cols-3 bg-white mx-auto h-16 lg:h-20 shadow-lg">            
            <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
                <button onClick={()=>setSideView(!sideView)}>
                    <span>
                        <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>    
                    </span>
                </button>
                    
            </div>
            <Link href={`/`}>
                <a className="w-70 items-center mx-auto flex">
                    <span className="font-bold text-xl w-auto bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 animate-text-gradient">JustinTory</span>
                </a>
            </Link>
            
            <div className={`fixed top-0 z-[1200] lg:hidden w-full h-[100vh] bg-gray-500 opacity-40 transition blur-sm ${sideView?'visible':'invisible'}`} onClick={()=>setSideView(!sideView)}></div>
            <nav className={`fixed top-0 z-[1300] lg:hidden w-[300px] h-full bg-white opacity-100 ${sideView?'left-0':'left-[-300px]'} duration-500`}>
                <div className="h-[50px]">
                    {/* <span className="font-bold text-xl w-auto inline-block align-middle">JustinTory</span> */}
                </div>
                <nav className='p-2 overflow-y-auto h-[90%]'>
                    <ul>
                    {rendering()}
                    </ul>
                </nav>
                
            </nav>

        </header>
    )
}





export default Header

function AccordionMenu ({children, sideView, setSideView}: Props) {
    const router = useRouter()
    let summaryTitle = `${children.name}(${children.postCnt})`
    const [toggle, setToggle] = useState(true);
    const clickedToggle = () => {
        console.log(toggle)
        setToggle((prev) => !prev);
    };

    //${toggle?'block':'hidden'}
    return (
        <div className="bg-white">
            <div className="flex place-content-between h-10 pl-3 hover:rounded-lg hover:font-bold" onClick={clickedToggle}>
                <div className="self-center text-black ">{summaryTitle}</div>
                <button className="w-5"><RiArrowUpSLine className={`justify-self-end ${toggle?'rotate-180 duration-500':'duration-500'}`}/></button>
            </div>
            <div>
                <ul className={`p-1 ml-2 ${toggle?'block':'hidden'} ${toggle?'animate-accordian-menu-open':'animate-accordian-menu-close'} border-l`}> 
                    {
                        children.posts.map((item :String, idx)=>{
                            let title = item.substring(0,item.length-4)
                            return (
                                <li key={idx}>
                                    <button className='side-menu-item hover:bg-white hover:font-bold transition duration-150 ease-in-out' onClick={()=>{
                                        setSideView(!sideView)
                                        router.push(`/post/${children.name}/${title}`)
                                    }}>
                                        <span className="relative flex"><BsDot className='self-center'/>{title}</span>
                                    </button>
                                </li>        
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}