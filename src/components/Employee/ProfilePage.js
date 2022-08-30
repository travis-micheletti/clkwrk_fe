// Profile Page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
// axios calls: get employee (will need to pass down employee information as context) get employee log, post new note to employee log (need a dropdown form), edit employee(dropdown form), delete employee

import { motion } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import Moment from 'react-moment'
// import 'moment-timezone'
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
		<motion.div className=''>
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