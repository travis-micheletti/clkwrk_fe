// View Employees page - > displays all or some employees depending on user input
// axios call to get all employees or some employees based on different options/parameters
import axios from 'axios'
import { motion } from 'framer-motion'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../AppContext'
import ProfileResult from './ProfileResult'
import AddModal from '../AddModal'

const ViewEmployees = ({firstName, lastName, picture, id}) => {
	const [array, setArray] = useState([])

	const [department, setDepartment] = useState()
	const [shift, setShift] = useState()
	const [laborCode, setLaborCode] = useState()
	const [filter, setFilter] = useState([])

	const {
		axiosResults, setAxiosResults
	} 
		= useContext(AppContext)


useEffect(() => {
	axios.get('https://clkwrk-be.herokuapp.com/employees')
		.then(response => {
			setAxiosResults(response.data)
			console.log('fetch successful')
		})
		.catch(console.error)
},[])

useEffect(() => {
	if (filter === []) {
		setArray(axiosResults)
	} else {
		const runFilter = axiosResults.filter((item) => {
			return item.firstName
		})
		setArray(runFilter)
	}
}, [axiosResults, filter])

function DisplayEmployees() {
	return array.map((item, index) => {
		return (
			<div key={index}>
				<ProfileResult 
				firstName={item.firstName}
				lastName={item.lastName}
				department={item.department}
				shift={item.shift}
				picture={item.picture}
				id={item._id}
				/>
			</div>
		)
	})
}
const { setAddModal, setAddModalClass } = useContext(AppContext)

    function callAddModal() {
        setTimeout(() => {
            setAddModalClass('AddModal-container')
        }, 1);
        setAddModal(
            <AddModal
                firstName={firstName}
                lastName={lastName}
                department={department}
                shift={shift}
                picture={picture}
				id={id}
            />
		
        )
		console.log('hi from add modal call')
    }

	return (
		<motion.div className='displayContainer'>
			<span className='subContainer flex-row flex-wrap justify-evenly'>{DisplayEmployees()}</span>
			
		</motion.div>
	)
}

export default ViewEmployees