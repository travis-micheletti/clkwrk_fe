// import { useAuth0 } from '@auth0/auth0-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext'
import { useContext, useEffect} from 'react'


const LoginButton = () => {
	let buttonClick = 0
	const {
		loggedIn
	}
		= useContext(AppContext)
	
	// useEffect(() => {
	// 	buttonClick += 1 
	// 	setLoggedIn(!loggedIn)
	// }, [buttonClick])
	console.log(loggedIn)
	return loggedIn ? (
		<motion.button className='logButton'>
			<Link to='/logged-out'>logout</Link>
		</motion.button>
	) : (
		<motion.button className='logButton'>
			<Link to='/logged-in'>login</Link>
		</motion.button>
	)
	
	

	// const { loginWithRedirect } = useAuth0()

	// return <button className='logButton' onClick={() => loginWithRedirect()}>Log In</button>;
}


export default LoginButton