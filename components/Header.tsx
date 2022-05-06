import { MenuIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import styles from "./Header.module.css";
const Header = ()=>{
    return (
        <header className="sticky w-full top-0 z-50 grid grid-cols-3 bg-white mx-auto h-16 lg:h-20 shadow-lg">            
            <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
                    <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>
            </div>
            <Link href={`/`}>
                <a className="w-70 items-center mx-auto flex">
                    <span className="font-bold text-xl w-auto">JustinTory</span>
                </a>
            </Link>
            
            {/* <div className="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex h-16 lg:h-20 shadow-lg">
                <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
                    <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>
                </div>
                <a className="w-40 items-center mx-auto flex">
                    <span className="font-bold text-xl w-auto">Victoryhwan</span>
                </a>
            </div> */}
        </header>
    )
}

export default Header