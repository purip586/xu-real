'use client'

import Link from "next/link";
import Image from "next/image";
import logo from '@/public/assets/logo.svg';
import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";


const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    return(
        <nav className='flex justify-between items-center w-full mb-10 pb-4 pt-3 border-b-2 border-gray-100'>
            <Link href='/' className='flex gap-2 items-center'>
                <Image
                    src={logo}
                    alt='logo'
                    width={70}
                    className='object-contain'
                />
                <p className='logo_text'>Cross U Co., Ltd.</p>
            </Link>

            {/* desktop nav */}
            <div className="sm:flex hidden gap-5">
                <Link href='/register-property'>Register Property</Link>
                <Link href='/creditworthness'>Check Creditworthness</Link>
                <Link href='/about'>About XU</Link>
                <Link href='/contact'>Connect with an agent</Link>
            </div>

                {/* mobile navigation */}
                <div className="sm:hidden flex relative">
                    <HiOutlineMenuAlt4 onClick={() => setToggleDropdown(!toggleDropdown)}/>
                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link 
                                className="dropdown_link" 
                                href='/register-property'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Register Property
                            </Link>
                            <Link 
                                className="dropdown_link" 
                                href='/creditworthness'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Check Creditworthness
                            </Link>
                            <Link 
                                className="dropdown_link" 
                                href='/about'
                                onClick={() => setToggleDropdown(false)}
                            >
                                About XU
                            </Link>
                            <Link 
                                className="dropdown_link" 
                                href='/contact'
                                onClick={() => setToggleDropdown(false)}
                            >
                                Connect with an agent
                            </Link>
                        </div>
                )}
                </div>
        </nav>
    )
};

export default Navbar;