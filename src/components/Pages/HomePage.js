// Home page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../../AppContext'
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
		setCurrentUser('current user')
		setHideArrow(false)
		setShowNav(false)
	},[])

	useEffect(() => {
	setHideArrow(!showNav)
		
	},[showNav])

	return (
		<motion.div 
			initial={{ opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				transition={{duration: 1}}
				className='outerHomeContainer'
		>
			
			<motion.div 
				className='homeContainer'
				initial={{ opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				transition={{duration: 1}}
			>
				<div className='xs:hidden'>
					{/* <img className='accentLines' alt='accent line'  src={accentLines}/> */}
				</div>
				<div className={!hideArrow ? 'hidden' : 'arrowContainer'}>
						<img className='arrow' alt='arrow graphic' src={arrow}/>
						<div className='homeTextContainer'>
							<h1 className='homeText xs:fixed xs:top-24 xs:w-1/3 xs:left-10 xs:text-xl'>get started  here</h1>
						</div>
				</div>
			
				<div className={!hideArrow ? 'clkwrkHome fixed bottom-0 h-1/4 xs:hidden ' : 'clkwrkHome'}>
							<img src='https://i.postimg.cc/N0XKpd1n/logof.png' className='h-full xs:fixed xs:left-1 xs:bottom-33  xs:h-auto' alt='logo'/>
							<h2 className={!hideArrow ? 'hidden' : 'font-raleway fixed text-3xl text-center w-1/2  flex flex-col justify-center bottom-20 h-40 text-honeydew font-extrabold'}>keeping workforces productive 24/7</h2>
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
				{/* <div className=''><img className='accentLinesBottom' alt='accent line' src={accentLines}/></div> */}
			</motion.div>
		</motion.div>
	)
}

export default HomePage