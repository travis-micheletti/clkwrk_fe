// Nav Bar - > displays on all pages from the home page and on 
import { Link } from 'react-router-dom'
import UserSettings from './UserSettings'
import LoginButton from '../Auth/LoginButton'
import { motion } from 'framer-motion'


const NavBar = () => {

	
	
	return (
		<motion.div className='fixed bg-slate-500 w-screen h-10 flex justify-center text-2xl'>
			<UserSettings />
			<Link to='/home'>home</Link>
			<Link to='/employees'>employees</Link>
			<Link to='/welcome'>welcome</Link>
			<Link to='/profile'>profile</Link>
			{/* <Link to='/logged-out'>logout</Link> */}
			<LoginButton />
			navbar
		</motion.div>
	) 
}

export default NavBar