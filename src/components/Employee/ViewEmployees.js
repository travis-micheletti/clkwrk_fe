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

	const [filterDepartment, setFilterDepartment] = useState(['HR', 'EGG HOUSE', 'CANNERY', 'FILLET', 'H&G'])
	const [filterShift] = useState(['blue', 'green', 'yellow'])
	const [laborCode, setLaborCode] = useState()
	const [greenChecked, setGreenChecked] = useState(true)
	const [blueChecked, setBlueChecked] = useState(true)
	const [yellowChecked, setYellowChecked] = useState(true)
	const [hrChecked, setHrChecked] = useState(true)
	const [eggHouseChecked, setEggHouseChecked] = useState(true)
	const [canneryChecked, setCanneryChecked] = useState(true)
	const [filletChecked, setFilletChecked] = useState(true)
	const [hgChecked, setHgChecked] = useState(true)
	const [rollCallClass, setRollCallClass] = useState('hidden')

	const {
		axiosResults, setAxiosResults,
		setAddModal, setAddModalClass,
		rollCallMode, setRollCallMode
	} 
		= useContext(AppContext)

function filterShiftResults(arr, fil) {
	console.log(fil)
	// setArray(axiosResults)
	let filteredResults = []
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < fil.length; j++) {
			if (arr[i].shift === fil[j]) {
				filteredResults.push(arr[i])
				console.log(filteredResults)
			}
		} setArray(filteredResults)
	} 
}

function filterDepartmentResults(arr, fil) {
	console.log(fil)
	setArray(axiosResults)
	let filteredResults = []
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < fil.length; j++) {
			if (arr[i].department === fil[j]) {
				filteredResults.push(arr[i])
				console.log(filteredResults)
			}
		} setArray(filteredResults)
	} 
}


useEffect(() => {
	axios.get('https://clkwrk-be.herokuapp.com/employees')
		.then(response => {
			setAxiosResults(response.data)
		})
		.catch(console.error)
},[])

useEffect(() => {
		setArray(axiosResults)	
}, [axiosResults])

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
			return filterShiftResults(array, filterShift)
		} else {
			filterShift.splice(1, 0,'green')
			console.log(filterShift.length)
			filterShiftResults(axiosResults, filterShift)
		}
		
	}
	function handleBlueCheck() {
		setBlueChecked(!blueChecked)
		if (blueChecked) {
			const filterIndex = filterShift.findIndex(item => {
				return item === 'blue'
			})
			filterShift.splice(filterIndex, 1)
			console.log(filterShift)
			return filterShiftResults(array, filterShift)
		} else {
			filterShift.splice(0, 0, 'blue')
			console.log(filterShift.length)
			return filterShiftResults(axiosResults, filterShift)
		}
	}
	function handleYellowCheck() {
		// console.log('hi from handleYellowCheck')
		setYellowChecked(!yellowChecked)
		if (yellowChecked) {
			const filterIndex = filterShift.findIndex(item => {
				return item === 'yellow'
			})
			filterShift.splice(filterIndex, 1)
			console.log(filterShift)
			filterShiftResults(array, filterShift)
		} else {
			filterShift.push('yellow')
			console.log(filterShift.length)
			filterShiftResults(axiosResults, filterShift)
		}
	}
	function handleHrCheck() {
		setHrChecked(!hrChecked)
		if (hrChecked) {
			const filterIndex = filterDepartment.findIndex(item => {
				return item === 'HR'
			})
			filterDepartment.splice(filterIndex, 1)
			console.log(filterDepartment)
			filterDepartmentResults(array, filterDepartment)
		} else {
			filterDepartment.push('HR')
			console.log(filterDepartment)
			filterDepartmentResults(axiosResults, filterDepartment)
		}
	}
	function handleEggHouseCheck() {
		// console.log('hi from handleEggHouseCheck')
		setEggHouseChecked(!eggHouseChecked)
		if (eggHouseChecked) {
			const filterIndex = filterDepartment.findIndex(item => {
				return item === 'EGG HOUSE'
			})
			filterDepartment.splice(filterIndex, 1)
			console.log(filterDepartment)
			filterDepartmentResults(array, filterDepartment)
		} else {
			filterDepartment.push('EGG HOUSE')
			console.log(filterDepartment)
			filterDepartmentResults(axiosResults, filterDepartment)
		}
	}
	function handleCanneryCheck() {
		// console.log('hi from handleCanneryCheck')
		setCanneryChecked(!canneryChecked)
		if (canneryChecked) {
			const filterIndex = filterDepartment.findIndex(item => {
				return item === 'CANNERY'
			})
			filterDepartment.splice(filterIndex, 1)
			console.log(filterDepartment)
			filterDepartmentResults(array, filterDepartment)
		} else {
			filterDepartment.push('CANNERY')
			console.log(filterDepartment)
			filterDepartmentResults(axiosResults, filterDepartment)
		}
	}
	function handleFilletCheck() {
		// console.log('hi from handleFilletCheck')
		setFilletChecked(!filletChecked)
		if (filletChecked) {
			const filterIndex = filterDepartment.findIndex(item => {
				return item === 'FILLET'
			})
			filterDepartment.splice(filterIndex, 1)
			console.log(filterDepartment)
			filterDepartmentResults(array, filterDepartment)
		} else {
			filterDepartment.push('FILLET')
			console.log(filterDepartment)
			filterDepartmentResults(axiosResults, filterDepartment)
		}
	}
	function handleHgCheck() {
		// console.log('hi from handleHgCheck')
		setHgChecked(!hgChecked)
		if (hgChecked) {
			const filterIndex = filterDepartment.findIndex(item => {
				return item === 'H&G'
			})
			filterDepartment.splice(filterIndex, 1)
			console.log(filterDepartment)
			filterDepartmentResults(array, filterDepartment)
		} else {
			filterDepartment.push('H&G')
			console.log(filterDepartment)
			filterDepartmentResults(axiosResults, filterDepartment)
		}
	}

	function rollCallClick () {
		setRollCallMode(!rollCallMode)
		console.log(rollCallMode)
		if (!rollCallMode) {
			setRollCallClass('rollCall')
		} else {
			setRollCallClass('hidden')
		}
	}

	function cancelClick () {
		setRollCallClass('hidden')
		setRollCallMode(!rollCallMode)
		// console.log ('cancelling')
	}
	

	return (
		<motion.div className='displayContainer'>
			<button onClick={rollCallClick} className='flex'>Roll Call</button>
			<div className={rollCallClass}>ROLL CALL MODE ACTIVE</div>
			<div className={rollCallClass} onClick={cancelClick}>CANCEL ROLL CALL</div>
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
			<div className={'subContainer flex-row flex-wrap justify-evenly'}>{DisplayEmployees()}</div>
			
		</motion.div>
	)
}

export default ViewEmployees