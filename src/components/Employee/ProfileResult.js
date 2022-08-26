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
	<div className='border h-40 w-40 profileContainer flex justify-center items-center' onClick={() => {
		handleProfileClick()
	}}>
		<div className=''>
			<div className=''>
				<img src={picture} alt='employee selfie' className='employeePicture'></img>
			</div>
			<div>
				<span className='profileName'>{lastName}, {firstName}</span>
			</div>
		
		
		</div>
		
	</div>
)
}

export default ProfileResult