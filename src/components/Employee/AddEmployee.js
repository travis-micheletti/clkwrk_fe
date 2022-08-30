import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { motion } from 'framer-motion'
import axios from "axios"



const AddEmployee = () => {
	
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [birthDate, setBirthDate] = useState()
	const [hireDate, setHireDate] = useState()
	const [department, setDepartment] = useState('')
	const [laborCode, setLaborCode] = useState('')
	const [shift, setShift] = useState('')
	const [room, setRoom] = useState('')
	const [picture, setPicture] = useState('')
	const [employeeType, setEmployeeType] = useState('')
	
	const  {
		employeeModalHidden,
		setEmployeeModalHidden
	}
		= useContext(AppContext)
		


		
	const addToEmployees =  () => {
	
			axios.post('https://clkwrk-be.herokuapp.com/employees/', {
			
				firstName: firstName,
				lastName: lastName,
				birthDate: birthDate,
				hireDate: hireDate,
				laborCode: laborCode,
				department: department,
				shift: shift,
				room: room,
				picture: picture,
				employeeType: employeeType,
			}) 
			.then((response) => {
				console.log(response.data)
				console.log('employee created!')
				handleModalClick()
			})
			.catch(console.error)
		}
	

	const handleModalClick = () => {
		setEmployeeModalHidden(!employeeModalHidden)
		setFirstName('')
		setLaborCode('')
		setLastName('')
		setBirthDate('')
		setHireDate('')
		setPicture('')
		setDepartment('')
		setShift('')
		setRoom('')
		setEmployeeType('')
		console.log(employeeModalHidden)
	}
	
	return (
		<motion.div 
			className={employeeModalHidden ? 'hidden' : 'employeeModalContainer border'}

		>	<div>
			
		</div>
				<form className='employeeModalContents sm:w-1/2 mb-40'>
						<div className='w-full p-2'>
							<select
								className='employeeModalItem'
								value={employeeType} 
								onChange= {(e) => 
									setEmployeeType(e.currentTarget.value)
							}>
								<option value='default' hidden>employee type</option>
								<option value='processor'>processor</option>
								<option value='supervisor'>supervisor</option>
								<option value='admin'>admin</option>
							</select>
						</div>
						<div className='w-full p-2'>
							<input
								placeholder='first name' 
								type='text'
								className='employeeModalItem'
								value={firstName} 
								onChange= {(e) => 
									setFirstName(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input
								placeholder='last name' 
								type='text'
								className='employeeModalItem'
								value={lastName} 
								onChange= {(e) => 
									setLastName(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input
								placeholder='birth date' 
								type='text'
								className='employeeModalItem'
								value={birthDate} 
								onChange= {(e) => 
									setBirthDate(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input 
								placeholder='hire date'
								className='employeeModalItem'
								value={hireDate} 
								onChange= {(e) => 
									setHireDate(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input 
								placeholder='labor code'
								className='employeeModalItem'
								value={laborCode} 
								onChange= {(e) => 
									setLaborCode(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input 
								placeholder='department'
								type='text'
								className='employeeModalItem'
								value={department} 
								onChange= {(e) => 
									setDepartment(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input 
								placeholder='shift'
								type='text'
								className='employeeModalItem'
								value={shift} 
								onChange= {(e) => 
									setShift(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input 
								placeholder='room'
								type='text'
								className='employeeModalItem'
								value={room} 
								onChange= {(e) => 
									setRoom(e.currentTarget.value)
							}>
							</input>
						</div>
						<div className='w-full p-2'>
							<input 
								placeholder='picture'
								type='text'
								className='employeeModalItem'
								value={picture} 
								onChange= {(e) => 
									setPicture(e.currentTarget.value)
							}>
							</input>
						</div>
						
					<div className='flex justify-between w-1/2'>
							<div className='cursor-pointer border bg-slate-500 m-2' onClick={() => {
								handleModalClick()
							}}>
								Cancel
							</div>
							<div className='cursor-pointer border bg-slate-500 m-2' onClick={() => {
								addToEmployees()
							}}>
								Submit
							</div>
					</div>
					
				</form>
		</motion.div>
	)
}

	export default AddEmployee