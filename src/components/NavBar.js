// Nav Bar - > displays on all pages from the home page and on 
import UserSettings from './UserSettings'
import { motion } from 'framer-motion'

const NavBar = () => {
	return (
		<motion.div>
			<UserSettings />
			Howdy from the Nav Bar!
		</motion.div>
	)
}

export default NavBar