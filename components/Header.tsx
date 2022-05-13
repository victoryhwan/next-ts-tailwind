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

const Header = ()=>{
    const [sideView, setSideView] = useState(false);
    
    function testClick(){
        console.log(`@@@#@#@#`, sideView)
        setSideView(!sideView)
    }

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
            
            <div className={`fixed z-[1200] w-full h-[1000px] bg-gray-700 opacity-40 transition ${sideView?'visible':'invisible'}`} onClick={()=>setSideView(!sideView)}>
                <nav className='w-[300px] h-full bg-yellow-200 opacity-100'>

                </nav>
            </div>
            {/* <div aria-hidden="true" className='fixed flex opacity-[1] bg-[#00000080] transition-opacity w-full h-full z-[1]' onClick={()=>toggleDrawer}>

            </div> */}

        </header>
    )
}





export default Header