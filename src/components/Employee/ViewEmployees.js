// View Employees page - > displays all or some employees depending on user input
// axios call to get all employees or some employees based on different options/parameters
import axios from 'axios'
import { motion } from 'framer-motion'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../AppContext'
import ProfileResult from './ProfileResult'
import AddModal from '../AddModal'

const ViewEmployees = ({firstName, lastName, picture, department, shift, id}) => {
	const [array, setArray] = useState([])

	const [filterDepartment, setFilterDepartment] = useState()
	const [filterShift, setFilterShift] = useState(['blue', 'green', 'yellow'])
	const [laborCode, setLaborCode] = useState()
	const [greenChecked, setGreenChecked] = useState(true)
	const [blueChecked, setBlueChecked] = useState(true)
	const [yellowChecked, setYellowChecked] = useState(true)
	const [hrChecked, setHrChecked] = useState(true)
	const [eggHouseChecked, setEggHouseChecked] = useState(true)
	const [canneryChecked, setCanneryChecked] = useState(true)
	const [filletChecked, setFilletChecked] = useState(true)
	const [hgChecked, setHgChecked] = useState(true)

	const testArr = ['blue', 'green', 'yellow']
	const {
		axiosResults, setAxiosResults,
		setAddModal, setAddModalClass
	} 
		= useContext(AppContext)

function filterShiftResults(arr, fil) {
	let filteredResults = []
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
		for (let j = 0; j < fil.length; j++) {
			console.log(arr[i].shift)
			if (arr[i].shift === fil[j]) {
				console.log(fil[j])
				filteredResults.push(arr[i])
			}
		} 
	} 
	console.log(filteredResults)
	setArray(filteredResults)
}


useEffect(() => {
	axios.get('https://clkwrk-be.herokuapp.com/employees')
		.then(response => {
			setAxiosResults(response.data)
			console.log(axiosResults)
		})
		.catch(console.error)
},[])

useEffect(() => {
	console.log(array)
	console.log(filterShift.length)
	if (filterShift.length > 2) { 
		console.log('hi from this is working!')
		setArray(axiosResults)
		
	} else {
		console.log('filterShift length is 2 or less!!')
		filterShiftResults(array)
	}
}, [axiosResults, filterShift.length])

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
		// console.log('hi from add modal call')
    }

	function handleGreenCheck() {
		setGreenChecked(!greenChecked)
		if (greenChecked) {
			const filterIndex = filterShift.findIndex(item => {
				return item === 'green'
			})
			filterShift.splice(filterIndex, 1)
			console.log(filterShift)
			// return filterShiftResults(array, filterShift)
		} else {
			filterShift.splice(1, 0,'green')
			console.log(filterShift)
			// return filterShiftResults(array, filterShift)
		}
		
	}
	function handleBlueCheck() {
		// console.log('hi from handleBlueCheck')
		setBlueChecked(!blueChecked)
	}
	function handleYellowCheck() {
		// console.log('hi from handleYellowCheck')
		setYellowChecked(!yellowChecked)
	}
	function handleHrCheck() {
		// console.log('hi from handleHrCheck')
		setHrChecked(!hrChecked)
	}
	function handleEggHouseCheck() {
		// console.log('hi from handleEggHouseCheck')
		setEggHouseChecked(!eggHouseChecked)
	}
	function handleCanneryCheck() {
		// console.log('hi from handleCanneryCheck')
		setCanneryChecked(!canneryChecked)
	}
	function handleFilletCheck() {
		// console.log('hi from handleFilletCheck')
		setFilletChecked(!filletChecked)
	}
	function handleHgCheck() {
		// console.log('hi from handleHgCheck')
		setHgChecked(!hgChecked)
	}

	return (
		<motion.div className='displayContainer'>
			<div className='flex w-10/12 justify-evenly'>Shifts: 
				<label>
					Green
					<input type='checkbox' checked={greenChecked} onChange={handleGreenCheck}></input>
				</label>
				<label>
					Blue
					<input type='checkbox' checked={blueChecked} onChange={handleBlueCheck}></input>
				</label>
				<label>
					Yellow
					<input type='checkbox' checked={yellowChecked} onChange={handleYellowCheck}></input>
				</label>
			</div>
			<div className='flex w-10/12 justify-evenly'>Departments: 
				<label>
					HR
					<input type='checkbox' checked={hrChecked} onChange={handleHrCheck}></input>
				</label>
				<label>
					Egg House
					<input type='checkbox' checked={eggHouseChecked} onChange={handleEggHouseCheck}></input>
				</label>
				<label>
					Cannery
					<input type='checkbox' checked={canneryChecked} onChange={handleCanneryCheck}></input>
				</label>
				<label>
					Fillet
					<input type='checkbox' checked={filletChecked} onChange={handleFilletCheck}></input>
				</label>
				<label>
					H&G
					<input type='checkbox' checked={hgChecked} onChange={handleHgCheck}></input>
				</label>
			</div>
			<div onClick={callAddModal} className='cursor-pointer'>
				Add Employee
			</div>
			<div className='subContainer flex-row flex-wrap justify-evenly'>{DisplayEmployees()}</div>
			
		</motion.div>
	)
}

export default ViewEmployees