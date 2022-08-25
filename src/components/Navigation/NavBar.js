// Nav Bar - > displays on all pages from the home page and on 
import { Link } from 'react-router-dom'
import UserSettings from './UserSettings'
import LoginButton from '../Auth/LoginButton'
import { motion } from 'framer-motion'
import AreaMap from '../Pages/AreaMap'



const NavBar = () => {

	
	
	return (
		<motion.div className='fixed bg-slate-500 w-screen h-10 flex justify-evenly text-2xl'>
			<Link to='/home'>home</Link>
			<Link to='/employees'>employees</Link>
			<Link to ='map'>map</Link>
			<Link to='/settings'>user settings</Link>
			<LoginButton />
		</motion.div>
	) 
}

export default NavBar