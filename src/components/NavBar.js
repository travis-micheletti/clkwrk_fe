// Nav Bar - > displays on all pages from the home page and on 
import { Link } from 'react-router-dom'
import UserSettings from './UserSettings'
import LoginButton from './Auth/LoginButton'
import { motion } from 'framer-motion'
import { AppContext } from '../AppContext'
import { useContext, useEffect, useState } from 'react'

const NavBar = () => {

	const {
		loggedIn
	}
		= useContext(AppContext)
	
	return loggedIn ? (
		<motion.div className='fixed bg-slate-500 w-screen h-10 flex justify-center text-2xl'>
			<UserSettings />
			<Link to='/home'>home</Link>
			<Link to='/employees'>employees</Link>
			<Link to='/welcome'>welcome</Link>
			<Link to='/profile'>profile</Link>
			<Link to='/logged-out'>logout</Link>
			navbar
		</motion.div>
	) : (
		<motion.div className='fixed bg-slate-500 w-screen h-10 flex justify-center text-2xl'>
			<UserSettings />
			<Link to='/home'>home</Link>
			<Link to='/employees'>employees</Link>
			<Link to='/welcome'>welcome</Link>
			<Link to='/profile'>profile</Link>
			<LoginButton />
			
		</motion.div>
	)
}

export default NavBar