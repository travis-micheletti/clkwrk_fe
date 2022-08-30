// Nav Bar - > displays on all pages from the home page and on 
import { Link } from 'react-router-dom'
import LoginButton from '../Auth/LoginButton'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AppContext } from '../../AppContext'
import { useContext, useState} from 'react'
import { FaHome, FaMapMarkerAlt, FaWindowClose } from 'react-icons/fa'
import { BsFillPeopleFill, BsArrowBarRight } from 'react-icons/bs'
import { IoSettings, IoExit } from 'react-icons/io5'



const NavBar = () => {
	
	const {
		hideNavBar, showNav,
		setShowNav
	}
		= useContext(AppContext)

	function handleShowNavClick () {
		setShowNav(!showNav)
	}

	return !hideNavBar ? (
		<motion.div 
			className='navBar'
				initial={{ opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
		>
			<div>
				{showNav ? 
				<IoExit className='cursor-pointer' onClick={handleShowNavClick}/> : <GiHamburgerMenu className='cursor-pointer' onClick={handleShowNavClick}/>}
				<span className='fixed text-white text-xs right-5 top-8 sm:hidden'>{!showNav ? 'nav' : ''}</span>
			</div>
			<div className={showNav ? 'navIconContainer' : 'hidden'}>
				<div className='justify-center items-center'>
					<Link to='/home'><FaHome/></Link>
					<span className='fixed text-white text-xs left-27 top-8 sm:hidden'>home</span>
				</div>
				<div className='justify-center items-center'>
					<Link to='/employees'><BsFillPeopleFill /></Link>
					<span className='fixed text-white text-xs -ml-3 top-8 sm:hidden'>employees</span>
				</div>
				<div>
					<Link to ='map'><FaMapMarkerAlt/></Link>
					<span className='fixed text-white text-xs ml-1 top-8 sm:hidden'>map</span>
				</div>
				<div>
					<Link to='/settings'><IoSettings/></Link>
					<span className='fixed text-white text-xs -ml-2 top-8 sm:hidden'>settings</span>
				</div>
			</div>
				
			
			{<LoginButton />}
			
		</motion.div>
	) : (
		<motion.div 
			className='hidden'
				initial={{ opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
			>
			
			<div className='hidden'>
				<Link to='/home'>home</Link>
				<Link to='/employees'>employees</Link>
				<Link to ='map'>map</Link>
				<Link to='/settings'>user settings</Link>
			</div>
			<div>
				<GiHamburgerMenu />
			</div>
			<LoginButton />
			
		</motion.div>
	)
}

export default NavBar