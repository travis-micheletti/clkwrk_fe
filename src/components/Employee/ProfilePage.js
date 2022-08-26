// Profile Page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
// axios calls: get employee (will need to pass down employee information as context) get employee log, post new note to employee log (need a dropdown form), edit employee(dropdown form), delete employee

import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

import EmployeeLog from './EmployeeLog'
import AreaMap from '../Pages/AreaMap'
import AddNote from './AddNote'



const ProfilePage = () => {
	const {
		profileSelected
	} 
		= useContext(AppContext)

	console.log(profileSelected)
	return (
		<motion.div className='displayContainer'>
			<div className='subContainer'>{profileSelected.firstName}
			<EmployeeLog />
			<AreaMap />
			<button onClick={() => console.log('adding note!')}>add</button>
			<AddNote />
			</div>
			
		</motion.div>
	)
}

export default ProfilePage