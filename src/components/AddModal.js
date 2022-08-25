import ProfileResult from './Employee/ProfileResult'
import { useState, useEffect } from 'react'
import { AppContext } from '../AppContext'
import axios from 'axios'

const AddModal = ({firstName, lastName, birthDate, hireDate, room, picture, employeeType, id}) => {
	const [addFirstName, setAddFirstName] = useState()
	const [addLastName, setAddLastName] = useState()
	const [addBirthDate, setAddBirthDate] = useState()
	const [addHireDate, setAddHireDate] = useState()
	const [addRoom, setAddRoom] = useState()
	const [addPicture, setAddPicture] = useState()
	const [addEmployeeType, setAddEmployeeType] = useState()

	function addSubmitHandler() {
		axios.put(`https://clkwrk-be.herokuapp.com/employees/${id}`, {
			"firstName": firstName,
			"lastName": lastName,
			"birthDate": birthDate,
			"hireDate": hireDate,
			"room": room,
			"picture": picture,
			"employeeType": employeeType
		})
			.then(
				console.log('Employee added')
			)
			.catch(console.error)

	}

	return (
		<div>
			<div>
				<h2>Add Employee</h2>
				<button onSubmit={() =>{addSubmitHandler()}}/>
			</div>
		</div>
	)
}

export default AddModal