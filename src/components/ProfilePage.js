// Profile Page - > displays Welcome to the logged in user, navigation and a graphic/quote for now?
import EmployeeLog from './EmployeeLog'
import { motion } from 'framer-motion'

const ProfilePage = () => {
	return (
		<motion.div>
			<EmployeeLog />
			Howdy from the Profile Page
		</motion.div>
	)
}

export default ProfilePage