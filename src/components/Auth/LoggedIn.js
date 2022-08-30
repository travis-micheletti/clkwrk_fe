// Authorization not currently working - this will be the component that displays a welcome message after login

import { AppContext } from '../../AppContext'
import { useContext, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { Navigate } from 'react-router-dom'


const LoggedIn = () => {

	const [redirectNow, setRedirectNow] = useState(false)
	setTimeout(() => setRedirectNow(true), 5000)

	const {
		loggedIn, setLoggedIn,
		setHideNavBar
	}
		= useContext(AppContext)
	
	
	useEffect(() => {
		setLoggedIn(true)
		setHideNavBar(true)
	}, [])
	console.log(loggedIn)

	return redirectNow ? (
		<Navigate replace to='/welcome'/>
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
			>This will eventually authenticate I promise</motion.span>
			
		</motion.div>
	)
}

export default LoggedIn