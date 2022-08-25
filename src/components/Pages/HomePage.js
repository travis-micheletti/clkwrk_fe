// Home page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../../AppContext'

const HomePage = () => {

	const {
		currentUser, setCurrentUser
	}
		= useContext(AppContext)

	useEffect(() => {
		setCurrentUser('travvy wavvy!')
	})

	return (
		<motion.div className='displayContainer'>
			<motion.div className='subContainer'>
				<div className=''>Welcome to the home screen, {currentUser}!</div>
			</motion.div>
		</motion.div>
	)
}

export default HomePage