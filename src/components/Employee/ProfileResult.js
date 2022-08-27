import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

// import { motion } from 'framer-motion'

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
		// if (newArray.length > 0) {
		// 	console.log(`${newArray.length} items left`)
		// 	const itemIndex = newArray.filter(item => {
		// 		return item === profileSelected
		// 	})
		// 	console.log(itemIndex)
		// }
		// console.log(array)
		// let newArray = []
		// const newItem = array.slice(e.target, 1)
		// newArray.push(newItem)
		// console.log(newArray)
		
		rollCallArray()
	}
	
return redirectNow ? (
	<Navigate replace to='/profile'/>
)	: (
	<div className='subContainer h-44 w-44 profileContainer flex  items-center' onClick={(e) => !rollCallMode ? handleProfileClick() : handleRollCallClick(e)}>
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