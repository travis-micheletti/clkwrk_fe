// Profile Page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
// axios calls: get employee (will need to pass down employee information as context) get employee log, post new note to employee log (need a dropdown form), edit employee(dropdown form), delete employee

import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import Moment from 'react-moment'
// import 'moment-timezone'
import EmployeeLog from './EmployeeLog'
import AreaMap from '../Pages/AreaMap'
import AddNote from './AddNote'



const ProfilePage = () => {
	const {
		profileSelected, setHideNavBar
	} 
		= useContext(AppContext)


useEffect(() => {
	setHideNavBar(false)

},[])
	const handleAddNote = () => {

	}



	return (
		<motion.div className=''>
			<div className='profilePageContainer overflow-scroll'>
				<div>
				{profileSelected.lastName}, {profileSelected.firstName}
				<img src={profileSelected.picture} alt='employee profile'/>
				<Moment format='MM/DD/YYYY'>{profileSelected.birthDate}</Moment><br></br>
				<Moment format='MM/DD/YYYY'>{profileSelected.hireDate}</Moment><br></br>
				{profileSelected.laborCode}<br></br>
				{profileSelected.department}<br></br>
				{profileSelected.shift}<br></br>
				{profileSelected.room}<br></br>
				{profileSelected.employeeType}<br></br>
				{profileSelected.employeeLog}<br></br>
					</div>
			
				<button onClick={handleAddNote}>add</button>
			<div className='modalContainer hidden'>
				<AddNote />
			</div>
			<div className='modalContainer hidden'>
				<EmployeeLog />
			</div>
			</div>
			
		</motion.div>
	)
}

export default ProfilePage