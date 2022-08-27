// Landing page - > displays graphic/welcome message/app name and transitions out after a delay
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../images/logo.svg'

const WelcomePage = () => {
	const [redirectNow, setRedirectNow] = useState(false)
	setTimeout(() => setRedirectNow(true), 2000)


	return redirectNow ? (
		
		<Navigate replace to='/home'/>
	) : 
	
	(
		<motion.div className='welcomeContainer m-auto'>
			<img className='h-to-fit' src={logo} alt='logo'></img>
		</motion.div>
	)
}

export default WelcomePage