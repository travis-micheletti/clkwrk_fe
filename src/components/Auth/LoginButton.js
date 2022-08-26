// import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext'
import { useContext, useEffect} from 'react'


const LoginButton = () => {
	
	const {
		loggedIn
	}
		= useContext(AppContext)

	return loggedIn ? (
		<motion.button className='logButton'>
			<Link to='/logged-out'>logout</Link>
		</motion.button>
	) : (
		<motion.button className='logButton'>
			<Link to='/logged-in'>login</Link>
		</motion.button>
	)
	
}


export default LoginButton