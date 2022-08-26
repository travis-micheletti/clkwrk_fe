import { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

// import { motion } from 'framer-motion'

const ProfileResult = ({firstName, lastName, department, shift, picture, id}) => {
	const [redirectNow, setRedirectNow] = useState(false)
	const {
		profileSelected, setProfileSelected
	}
		= useContext(AppContext)


	function handleProfileClick () {
		axios.get(`https://clkwrk-be.herokuapp.com/employees/${id}`)
			.then(response => {
				setProfileSelected(response.data)
				console.log(profileSelected)
				setRedirectNow(true)
			})
	}

return redirectNow ? (
	<Navigate replace to='/profile'/>
)	: (
	<div className='subContainer h-44 w-44 profileContainer flex  items-center' onClick={() => {
		handleProfileClick()
	}}>
		<div className='profileContainer'>
			<div>
				<img src={picture} alt='employee selfie' className={shift === 'green' ? 'green' : (shift === 'blue' ? 'blue' : 'yellow')}></img>
			</div>
			<div>
				<div className='profileName'>{lastName}, {firstName}</div>
				<div className='text-center'>{department}</div>
				
			</div>
		
		
		</div>
		
	</div>
)
}

export default ProfileResult