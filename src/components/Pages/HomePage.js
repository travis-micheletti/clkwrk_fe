// Home page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../../AppContext'

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
		<motion.div className='displayContainer'>
			<motion.div className='subContainer'>
				<div className='clockedIn'>Current User: {currentUser}!</div>
			</motion.div>
		</motion.div>
	)
}

export default HomePage