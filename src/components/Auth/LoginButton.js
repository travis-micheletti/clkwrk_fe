// import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext'
import { useContext} from 'react'
import { BsPersonXFill, BsFillPersonCheckFill} from 'react-icons/bs'
import { useAuth0 } from '@auth0/auth0-react'


const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()
	const {
		loggedIn
	}
		= useContext(AppContext)

	// return loggedIn ? (
	// 	<motion.div className='logButton'>
	// 		<button onClick={() => loginWIthRedirect()}><BsFillPersonCheckFill/></button>
	// 		<span className='fixed text-white text-xs left-2 top-8 sm:hidden'>login</span>
	// 	</motion.div>
	// ) : (
	// 	<motion.div className='logButton'>
	// 		<Link to='/logged-in'><BsPersonXFill/></Link>
	// 		<span className='fixed text-white text-xs left-2 top-8 sm:hidden'>logout</span>
	// 	</motion.div>
	// )
	return <button onClick={() => loginWithRedirect()}>Login</button>
}


export default LoginButton