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
		<div className='navIcons'>
			<Link to='/logged-out'><BsFillPersonCheckFill/></Link>
			<span className=' text-white text-xs  top-8 sm:hidden'>login</span>
		</div>
	) : (
		<div className='navIcons'>
			<Link to='/logged-in'><BsPersonXFill/></Link>
			<span className=' text-white text-xs l top-8 sm:hidden'>logout</span>
		</div>
	)
	
}


export default LoginButton