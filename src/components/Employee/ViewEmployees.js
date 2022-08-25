// View Employees page - > displays all or some employees depending on user input
// axios call to get all employees or some employees based on different options/parameters
import axios from 'axios'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const ViewEmployees = () => {
	const [employees, setEmployees] = useState([])
	const [axiosResults, setAxiosResults] = useState([])

let newSearch = axios.get('https://clkwrk-be.herokuapp.com/employees')
console.log(newSearch)

// useEffect(() => {
// 	axios.get('https://clkwrk-be.herokuapp.com/employees')
// 		.then(response => {
// 			// setAxiosResults(response.data)
// 			console.log(response.data)
// 			// setEmployees(axiosResults.firstName)
// 		})
// })

	return (
		<motion.div className='displayContainer'>
			{employees}
		</motion.div>
	)
}

export default ViewEmployees