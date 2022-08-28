// Logged out page - > displays simple logged out screen before redirecting to the welcome screen again
import { AppContext } from '../../AppContext'
import { useContext, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { Navigate } from 'react-router-dom'


const LoggedOut = () => {
	const [redirectNow, setRedirectNow] = useState(false)
	setTimeout(() => setRedirectNow(true), 2000)

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
		<motion.div className='displayContainer'>
			Howdy from the Logged Out Page
		</motion.div>
	)
}

export default LoggedOut