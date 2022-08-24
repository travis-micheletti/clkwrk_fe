// Profile Page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
// axios calls: get employee (will need to pass down employee information as context) get employee log, post new note to employee log (need a dropdown form), edit employee(dropdown form), delete employee
import EmployeeLog from './EmployeeLog'
import AreaMap from './AreaMap'
import { motion } from 'framer-motion'

const ProfilePage = () => {
	return (
		<motion.div className='displayContainer'>
			profile
			<EmployeeLog />
			<AreaMap />
		</motion.div>
	)
}

export default ProfilePage