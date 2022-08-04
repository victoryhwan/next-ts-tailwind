import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import styles from "./Header.module.css";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdKeyboardArrowRight, MdArrowForwardIos } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";


type Props = {
    children?: PostItem
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

    console.log(`rendering`,postList)
    const [sideView, setSideView] = useState(false);

    const toggleDrawer = () => {
        
        (event: React.KeyboardEvent | React.MouseEvent) => {
            console.log(`click`)
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
        }
    };

    // const [expanded, setExpanded] = useState([false,false,false,false]);
    // const handleChange = (idx: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    //     // setExpanded(isExpanded ? panel : false);
    //         let deepCopy_expanded = {...expanded}
    //         deepCopy_expanded[idx] = !expanded[idx]
    //         setExpanded(deepCopy_expanded)
    //     };
        
    const rendering = () => {
        const rs = []
        
        console.log(`rendering`,postList)
        console.log(`rendering:${JSON.stringify(postList)}`)
        for(let i=0; i<postList.length; i++){
            rs.push(<li key={i}><AccordionMenu>{postList[i]}</AccordionMenu></li>);
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
                    <span className="font-bold text-xl w-auto">JustinTory</span>
                </a>
            </Link>
            
            <div className={`fixed top-0 z-[1200] lg:hidden w-full h-[100vh] bg-gray-500 opacity-40 transition ${sideView?'visible':'invisible'}`} onClick={()=>setSideView(!sideView)}></div>
            <nav className={`fixed top-0 z-[1300] lg:hidden w-[300px] h-full bg-white opacity-100 ${sideView?'left-0':'left-[-300px]'} duration-500`}>
                <div className="h-[50px] items-center mx-auto justify-center">
                    <span className="font-bold text-xl w-auto">JustinTory</span>
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

function AccordionMenu ({children}: Props) {
    let summaryTitle = `${children.name}(${children.postCnt})`
    const [toggle, setToggle] = useState(false);
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
                    {/* <li className="p-0">1</li>
                    <li className="p-0">2</li>
                    <li className="p-0">2</li>
                    <li className="p-0">2</li>
                    <li className="p-0">2</li> */}
                    {
                        children.posts.map((item :String, idx)=>{
                            let title = item.substring(0,item.length-4)
                            return (
                                <li key={idx}>
                                    <Link href={`/post/${children.name}/${title}`}>
                                        <a className='side-menu-item hover:bg-white hover:font-bold'>
                                            <span className="relative flex"><BsDot className='self-center'/>{title}</span>
                                        </a>
                                    </Link>
                                </li>        
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}