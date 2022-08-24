// dependencies for animating the route paths
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// importing components
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
import LoggedOut from './Auth/LoggedOut'
import ViewEmployees from './ViewEmployees'
import WelcomePage from './WelcomePage'

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/*' element={<HomePage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='/employees' element={<ViewEmployees />} />
				<Route path='/welcome' element={<WelcomePage />} />
				<Route path='/logged-out' element={<LoggedOut />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes