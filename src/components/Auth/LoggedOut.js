// Logged out page - > displays simple logged out screen before redirecting to the welcome screen again
import { AppContext } from '../../AppContext'
import { useContext, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { Navigate } from 'react-router-dom'


const LoggedOut = () => {
	const [redirectNow, setRedirectNow] = useState(false)
	setTimeout(() => setRedirectNow(true), 5000)

	const {
		loggedIn, setLoggedIn,
		setHideNavBar
	}
		= useContext(AppContext)
	

	useEffect(() => {
		setLoggedIn(false)
		setHideNavBar(true)
		console.log(loggedIn)
	})
	
	return redirectNow ? (
		<Navigate replace to ='/welcome'/>
	) : (
		<motion.div 
			initial={{ opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 1}}
			className='logPages'
		>
			<motion.span
				initial={{ x: '100vw'}}
				animate={{x: 0}}
				exit={{x: '-100vw'}}
				transition={{duration: 2}}
			>This will one day grow up and be a logout page</motion.span>
		</motion.div>
	)
}

export default LoggedOut