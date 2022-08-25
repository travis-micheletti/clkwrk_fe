import { AppContext } from '../../AppContext'
import { useContext, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { Navigate } from 'react-router-dom'


const LoggedIn = () => {

	const [redirectNow, setRedirectNow] = useState(false)
	setTimeout(() => setRedirectNow(true), 2000)

	const {
		loggedIn, setLoggedIn
	}
		= useContext(AppContext)
	
	useEffect(() => {
		setLoggedIn(true)
	}, [])
	console.log(loggedIn)

	return redirectNow ? (
		<Navigate replace to='/welcome'/>
	) : (
		<motion.div className='displayContainer'>
			Howdy from the Logged In Page
			
		</motion.div>
	)
}

export default LoggedIn