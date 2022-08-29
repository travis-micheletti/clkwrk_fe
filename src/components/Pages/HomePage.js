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
		setHideNavBar, showNav,
		setShowNav
	}
		= useContext(AppContext)

	const[hideArrow, setHideArrow] = useState()

	useEffect(() => {
		setHideNavBar(false)
		setCurrentUser('travvy wavvy!')
		setHideArrow(false)
		setShowNav(false)
	},[])

	useEffect(() => {
	setHideArrow(!showNav)
		
	},[showNav])

	return (
		<motion.div className='outerHomeContainer'>
			
			<motion.div className='homeContainer'>
				<div className=''>
					<img className='accentLines' alt='accent line'  src={accentLines}/>
				</div>
				<div className={!hideArrow ? 'hidden' : 'arrowContainer'}>
						<img className='arrow' alt='arrow graphic' src={arrow}/>
						<div className='homeTextContainer'>
							<h1 className='homeText'>get started with clkwrk here</h1>
						</div>
				</div>
				<div className={!hideArrow ? 'tutorial' : 'hidden'}>
					<ul className='tutorialList'>
						<li className='tutorialItem'>home - navigate back to this screen</li>
						<li className='tutorialItem'>employees - see all employees</li>
						<li className='tutorialItem'>map - pull up the facility map</li>
						<li className='p-4'>settings - change user settings</li>
					</ul>
					
				</div>
				<div className='clockedIn'>Logged in as: {currentUser}!</div>
				<div className=''><img className='accentLinesBottom' alt='accent line' src={accentLines}/></div>
			</motion.div>
		</motion.div>
	)
}

export default HomePage