// import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext'
import { useContext} from 'react'
import { BsPersonXFill, BsFillPersonCheckFill} from 'react-icons/bs'


const LoginButton = () => {
	
	const {
		loggedIn
	}
		= useContext(AppContext)

	return loggedIn ? (
		<motion.button className='logButton'>
			<Link to='/logged-out'><BsFillPersonCheckFill/></Link>
		</motion.button>
	) : (
		<motion.button className='logButton'>
			<Link to='/logged-in'><BsPersonXFill/></Link>
		</motion.button>
	)
	
}


export default LoginButton