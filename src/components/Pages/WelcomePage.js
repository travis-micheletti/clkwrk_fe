// Landing page - > displays graphic/welcome message/app name and transitions out after a delay
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../images/logo.svg'
import accentLines from '../../images/accentLines.svg'
import { AppContext } from '../../AppContext'
import { useContext } from 'react'

const WelcomePage = () => {
	const [redirectNow, setRedirectNow] = useState(false)
	// setTimeout(() => setRedirectNow(true), 2000)
	const {
		setHideNavBar, setShowNav
	}
		= useContext(AppContext)
	setHideNavBar(true)
	setShowNav(false)
	return redirectNow ? (
		
		<Navigate replace to='/home'/>
	) : 
	
	(
		<motion.div className='welcomeContainer'>
			<div className=''>
					<img className='accentLines' alt='accent line'  src={accentLines}/>
			</div>
			<h2 className='welcomeHeader'>@clkwrkapp</h2>
			<h6 className='welcomeSubHeader'>-liii</h6>
			<div className=' flex justify-center'>
				<h2 className='welcomeMessage'>welcome to</h2>
				<img className='xs:w-to-fit sm:h-3/4 sm:mt-30' src='https://i.postimg.cc/N0XKpd1n/logof.png' alt='logo'></img>
			</div>
			
			
				<img className='accentLinesBottom' alt='accent line' src={accentLines}/>
			
		</motion.div>
	)
}

export default WelcomePage