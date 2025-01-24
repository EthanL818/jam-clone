'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs"
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import Logo from "../../../public/images/jam_logo.png"
import "./styles.css"
import { ButtonHeader } from "../components/ButtonEmphasis";
import navProps from '@/helpers/interface/navProps';
import NavBar from '../components/NavBar';

const styles = {
    socialIcon: "m-2 text-white border-b border-blue-dark hover:text-blue-light hover:border-white hover:cursor-pointer pb-1",
    iconsSize: "h-6 w-6 xxs-screen:h-8 xxs-screen:w-8"
}

export function Header({ pages }: navProps) {
    const [menuOpen, setMenuOpen] = useState(false)

    function openingMenu() {
        setMenuOpen(!menuOpen)
    }
    return (
        <header className='w-full bg-blue-dark z-50'>
            <div className='height flex justify-between items-center p-2
                                sl-screen:w-[1280px] sl-screen:mx-auto sl-screen:justify-center sl-screen:flex-row
                                ms-screen:flex-col'>
                {/* Logo */}
                <Link href="/" className="border-2 border-blue-dark rounded-full hover:border-white">
                    <Image
                        className="logo"
                        alt="Jet Aircraft Museum Home Page"
                        src={Logo}
                        width={150}
                        height={150}
                    />
                </Link>
                <div className='flex flex-col items-end mt-4'>
                    {!menuOpen ?
                        <div className="text-white m-2 hover:text-black ms-screen:hidden" onClick={openingMenu}>
                            <BsList className={styles.iconsSize} />
                        </div>
                        :
                        <div className="text-white  m-2 hover:text-black ms-screen:hidden" onClick={openingMenu}>
                            <BsX className="stroke-1 h-8 w-8" />
                        </div>
                    }
                    {/* Descktop Menu*/}

                    <div className="hidden
                                        ms-screen:flex ">
                        {
                            pages.map((page, index) => (
                                <NavBar place="desk_top" page={page} key={index} />
                            ))
                        }
                        <ButtonHeader action="Donate" />
                    </div>

                    {/* Social Midia */}
                    <div className="flex flex-wrap">
                        <div className='flex ml-auto'>
                            <a title="Jet Aircraft Museum's Facebook" href='https://www.facebook.com/JetAircraftMuseum/' target="_blank" className={`${styles.socialIcon}`}>
                                <FaFacebook className={styles.iconsSize} />
                            </a>
                            <a title="Jet Aircraft Museum's Instagram" href='https://www.instagram.com/jetaircraftmuseum/' target="_blank" className={`${styles.socialIcon}`}>
                                <FaInstagram className={styles.iconsSize} />
                            </a>
                        </div>
                        <div className='flex ml-auto'>
                            <a title="Jet Aircraft Museum's Twitter" href='https://twitter.com/_jam_news' target="_blank" className={`${styles.socialIcon}`}>
                                <FaTwitter className={styles.iconsSize} />
                            </a>
                            <a title="Jet Aircraft Museum's YouTube" href='https://www.youtube.com/channel/UC9-HbMdn7_HOzYaBD-n_YTw' target="_blank" className={`${styles.socialIcon}`}>
                                <FaYoutube className={styles.iconsSize} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>


            {/* Mobile Menu*/}
            {menuOpen &&
                <div className="min-top-[25%] left-0 w-full ms-screen:hidden bg-blue-light p-10 ease-in-out duration-500">
                    <div className="mt-2
                                    ms-screen:flex  
                                    sl-screen:mt-20">
                        {
                            pages.map((page, index) => (
                                <NavBar place="mobile" page={page} key={index} openingMenu={openingMenu} />
                            ))
                        }
                        <ButtonHeader action="Donate" />

                    </div>
                </div>
            }
        </header>
    )
}