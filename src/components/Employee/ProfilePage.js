// profile page that pulls content based on the profile selected state - may change to an axios/api call in the future if it is more efficient

import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import Moment from 'react-moment'
import EmployeeLog from './EmployeeLog'
import AddNote from './AddNote'



const ProfilePage = () => {
	const {
		profileSelected, setHideNavBar,
		setNoteModalHidden, noteModalHidden,
		logModalHidden, setLogModalHidden
	} 
		= useContext(AppContext)




useEffect(() => {
	setHideNavBar(false)
	setNoteModalHidden(true)
	setLogModalHidden(true)
},[])

	const handleAddNote = () => {
		setNoteModalHidden(!noteModalHidden)
		console.log('hi from note click')
	}
	const handleLogClick = () => {
		setLogModalHidden(!logModalHidden)
	}



	return (
		<motion.div 
			initial={{ opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 1}}
			>
			<div className='profilePageContainer'>
				<div className='profileInfo '>
					<div className='profileHeader outline-welcome-bg outline outline-4 shadow-2xl'>
						{profileSelected.lastName}, {profileSelected.firstName}
					</div>
					<img className='profilePictures' src={profileSelected.picture} alt='employee profile'/>
					<div className='textInfo sm:w-1/2'>
						<div className='textItem'><span>Birth Date:</span><Moment format='MM/DD/YYYY'>{profileSelected.birthDate}</Moment></div>
						<div className='textItem'><span>Hire Date:</span><Moment format='MM/DD/YYYY'>{profileSelected.hireDate}</Moment></div>
						<div className='textItem'><span>Labor Code:</span>{profileSelected.laborCode}</div>
						<div className='textItem'><span>Department:</span>{profileSelected.department}</div>
						<div className='textItem'><span>Shift:</span>{profileSelected.shift}</div>
						<div className='textItem'><span>Room #:</span>{profileSelected.room}</div>
						<div className='textItem'><span>Employee Type:</span>{profileSelected.employeeType}</div>
						<div className='textItem justify-around'><button onClick={handleLogClick}>employee log</button> <button onClick={handleAddNote}>add note</button> </div>
					</div>
					
				</div>
			
				
			<div className='modalArea'>
				<AddNote />
			</div>
			<div className={logModalHidden ? 'hidden' : 'modalArea'}>
				<EmployeeLog />
			</div>
			</div>
			
		</motion.div>
	)
}

export default ProfilePage