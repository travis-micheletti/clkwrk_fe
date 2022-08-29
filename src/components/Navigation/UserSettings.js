// User settings - > allows users to change their passwords, update emails, and admins to change permissions
// make this a modal that drops down over current page to keep navigation simple 

import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'

const UserSettings = () => {

	const {
		setHideNavBar
	}
		= useContext(AppContext)
	
	useEffect(() => {
		setHideNavBar(false)
	}, [])
	return (
		<motion.div className='settingsContainer'>
			<div className='settings'>
				<h1 className='settingsHeader'>user settings</h1>
				<div className='h-full m-10'>
						<div className='setting'>Setting 1</div>
						<div className='setting'>Setting 2</div>
						<div className='setting'>Setting 3</div>
				</div>
			</div>			
		</motion.div>
	)
}

export default UserSettings