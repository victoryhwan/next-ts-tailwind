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

const Header = ()=>{
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

    const [expanded, setExpanded] = useState([false,false,false,false]);
    // const handleChange = (idx:number)=>{
    //     let deepCopy_expanded = {...expanded}
    //     deepCopy_expanded[idx] = !expanded[idx]
    //     setExpanded(deepCopy_expanded)
    // }
    const handleChange = (idx: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        // setExpanded(isExpanded ? panel : false);
            let deepCopy_expanded = {...expanded}
            deepCopy_expanded[idx] = !expanded[idx]
            setExpanded(deepCopy_expanded)
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
            
            <div className={`fixed z-[1200] w-full h-[1000px] bg-gray-700 opacity-40 transition ${sideView?'visible':'invisible'}`} onClick={()=>setSideView(!sideView)}></div>
            <nav className={`fixed z-[1300] w-[300px] h-full bg-yellow-200 opacity-100 ${sideView?'left-0':'left-[-300px]'} delay-50`}>
                <div className="h-[50px] items-center mx-auto justify-center">
                    <span className="font-bold text-xl w-auto">JustinTory</span>
                </div>
                <nav className='p-2 overflow-y-auto h-[90%]'>
                    <ul>
                        <li>
                            <Accordion expanded={expanded[0]} onChange={handleChange(0)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    // aria-controls="panel1bh-content"
                                    // id="panel1bh-header"
                                    >
                                    <Typography>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>

                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                        <li>
                            <Accordion expanded={expanded[1]} onChange={handleChange(1)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel2bh-header"
                                    >
                                    <Typography>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>

                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                        <li>
                            <Accordion expanded={expanded[2]} onChange={handleChange(2)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel3bh-header"
                                    >
                                    <Typography>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>

                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                        <li>
                            <Accordion expanded={expanded[3]} onChange={handleChange(3)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel3bh-header"
                                    >
                                    <Typography>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>

                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                        <li>
                            <Accordion expanded={expanded[3]} onChange={handleChange(3)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel3bh-header"
                                    >
                                    <Typography>
                                        General settings
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>
                                        <li>test</li>

                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    </ul>
                </nav>
                
            </nav>

        </header>
    )
}





export default Header