// Home page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../../AppContext'
import getStarted  from '../../images/getStarted.svg'
import accentLines from '../../images/accentLines.svg'
import arrow from '../../images/arrow.svg'

const HomePage = () => {

	const {
		currentUser, setCurrentUser,
		setHideNavBar
	}
		= useContext(AppContext)

	useEffect(() => {
		setHideNavBar(false)
		setCurrentUser('travvy wavvy!')
	},[])

	return (
		<motion.div className='outerHomeContainer'>
			
			<motion.div className='homeContainer'>
				
				<div className=''><img className='accentLines' src={accentLines}/></div>
				<div className='morningContainer'>
					<div className=' h-screen flex'>
						<img className='getStarted' src={getStarted}/>
					</div>
				</div>
				<div className='clockedIn'>Logged in as: {currentUser}!</div>
				<div className=''><img className='accentLinesBottom' src={accentLines}/></div>
			</motion.div>
		</motion.div>
	)
}

export default HomePage