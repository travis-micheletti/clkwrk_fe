// using animatepresence to animate between the different routes of my project with the framer motion library

// dependencies for animating the route paths
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


// importing components
import UserSettings from '../Navigation/UserSettings'
import AreaMap from '../Pages/AreaMap'
import LoggedIn from '../Auth/LoggedIn'
import HomePage from './HomePage'
import ProfilePage from '../Employee/ProfilePage'
import LoggedOut from '../Auth/LoggedOut'
import ViewEmployees from '../Employee/ViewEmployees'
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
				<Route path='/logged-in' element={<LoggedIn/>} />
				<Route path='/map' element={<AreaMap/>}/>
				<Route path='/settings' element={<UserSettings/>}/>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes