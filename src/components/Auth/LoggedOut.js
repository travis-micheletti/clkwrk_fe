// Logged out page - > displays simple logged out screen before redirecting to the welcome screen again

import { motion } from 'framer-motion'

const LoggedOut = () => {
	return (
		<motion.div className='displayContainer'>
			Howdy from the Logged Out Page
		</motion.div>
	)
}

export default LoggedOut