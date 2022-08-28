// Landing page - > displays graphic/welcome message/app name and transitions out after a delay
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../images/logo.svg'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'

const WelcomePage = () => {
	const [redirectNow, setRedirectNow] = useState(false)
	setTimeout(() => setRedirectNow(true), 2000)
	const {
		setHideNavBar
	}
		= useContext(AppContext)
	setHideNavBar(true)

	return redirectNow ? (
		
		<Navigate replace to='/home'/>
	) : 
	
	(
		<motion.div className='welcomeContainer'>
			<div className='welcomeBorders'></div>
			<h2 className='welcomeHeader'>clkwrk</h2>
			<h6 className='welcomeSubHeader'>@clkwrkapp</h6>
			<div className=' h-screen w-screen flex justify-center items-center'>
				<img className='xs:fixed xs:left-4' src={logo} alt='logo'></img>
			</div>
			<h2 className='welcomeMessage'>Welcome</h2>
			<div className='welcomeBorders'></div>
		</motion.div>
	)
}

export default WelcomePage