// Nav Bar - > displays on all pages from the home page and on 
import { Link } from 'react-router-dom'
import UserSettings from './UserSettings'
import { motion } from 'framer-motion'

const NavBar = () => {
	return (
		<motion.div>
			<UserSettings />
			<Link to='/'>home</Link>
			<Link to='/employees'>employees</Link>
			<Link to='/welcome'>welcome</Link>
			<Link to='/profile'>profile</Link>
			<Link to='/logged-out'>logout</Link>
			navbar
		</motion.div>
	)
}

export default NavBar