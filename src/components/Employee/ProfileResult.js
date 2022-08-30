import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import { motion } from 'framer-motion'

const ProfileResult = ({firstName, lastName, department, shift, picture, id}) => {
	
	const {
		profileSelected, setProfileSelected,
		rollCallMode, array
	}
		= useContext(AppContext)
	
		useEffect(() => {
			
	}, [])
	const [redirectNow, setRedirectNow] = useState(false)
	const [rollCallBorder, setRollCallBorder] = useState(false)
	const [newArray, setNewArray] = useState(array)

	const handleProfileClick = () => {
		axios.get(`https://clkwrk-be.herokuapp.com/employees/${id}`, {
			params: {
				_limit: 1
			}
		})
			.then(response => {
				setProfileSelected(response.data)
				console.log(profileSelected)
				setRedirectNow(true)
			})
	}
	const rollCallArray = () => {
		console.log(profileSelected.firstName)
	}

	const handleRollCallClick = () => {
		axios.get(`https://clkwrk-be.herokuapp.com/employees/${id}`, {
			params: {
				_limit: 1
			}
		})
			.then(response => {
				setProfileSelected(response.data)
				console.log(response.data)
				
			})
		setRollCallBorder(!rollCallBorder)
		rollCallArray()
	}
	
return redirectNow ? (
	<Navigate replace to='/profile'/>
)	: (
	<motion.div 
	className=' h-40 w-40 profileContainer flex  items-center' 
	onClick={(e) => !rollCallMode ? handleProfileClick() : handleRollCallClick(e)}
			initial={{ opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
			transition={{duration: 1}}
	>
		<div className='infoContainer'>
			<div>
				<img src={!rollCallBorder ? picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Eo_circle_purple_white_checkmark.svg/2048px-Eo_circle_purple_white_checkmark.svg.png'} alt='employee selfie' className={shift === 'green' ? 'green' : (shift === 'blue' ? 'blue' : 'yellow')}></img>
			</div>
			<div>
				<div className='profileName'>{lastName}, {firstName}</div>
				<div className='text-center'>{department}</div>
				
			</div>
		
		
		</div>
		
	</motion.div>
)
}

export default ProfileResult