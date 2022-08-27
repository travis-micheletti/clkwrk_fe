import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

// import { motion } from 'framer-motion'

const ProfileResult = ({firstName, lastName, department, shift, picture, id}) => {
	const [redirectNow, setRedirectNow] = useState(false)
	const [rollCallBorder, setRollCallBorder] = useState(false)
	
	const {
		profileSelected, setProfileSelected,
		rollCallMode
	}
		= useContext(AppContext)
	
		useEffect(() => {
			handleRollCallClick()
	}, [])

	
	function handleProfileClick () {
		axios.get(`https://clkwrk-be.herokuapp.com/employees/${id}`)
			.then(response => {
				setProfileSelected(response.data)
				console.log(profileSelected)
				setRedirectNow(true)
			})
	}

	function handleRollCallClick () {
		// if(rollCallBorder) {
		// 	console.log('cancelling')
		// 	setRollCallBorder(!rollCallBorder)
		// } else {
		// 	setRollCallBorder(!rollCallBorder)
		// }
		setRollCallBorder(!rollCallBorder)
		
	}

return redirectNow ? (
	<Navigate replace to='/profile'/>
)	: (
	<div className='subContainer h-44 w-44 profileContainer flex  items-center' onClick={() => !rollCallMode ? handleProfileClick() : handleRollCallClick()}>
		<div className='profileContainer'>
			<div>
				<img src={!rollCallBorder ? picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png'} alt='employee selfie' className={shift === 'green' ? 'green' : (shift === 'blue' ? 'blue' : 'yellow')}></img>
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