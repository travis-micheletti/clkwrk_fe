// View Employees page - > displays all or some employees depending on user input
// axios call to get all employees or some employees based on different options/parameters
import axios from 'axios'
import { motion } from 'framer-motion'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../AppContext'
import ProfileResult from './ProfileResult'
import AddModal from '../AddModal'

const ViewEmployees = ({firstName, lastName, picture, department, shift, id}) => {
	

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
	const [shiftFilter, setShiftFilter] = useState(false)
	const [departmentFilter, setDepartmentFilter] = useState(false)

	const {
		array, setArray,
		axiosResults, setAxiosResults,
		setAddModal, setAddModalClass,
		rollCallMode, setRollCallMode,
		setHideNavBar
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

// useEffect(() => {
// 	setShiftFilter(!shiftFilter)
// },[shiftFilter])
// useEffect(() => {
// 	setDepartmentFilter(!departmentFilter)
// }, [departmentFilter])




useEffect(() => {
	axios.get('https://clkwrk-be.herokuapp.com/employees')
		.then(response => {
			setAxiosResults(response.data)
		})
		.catch(console.error)
	setHideNavBar(false)
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


    // function callAddModal() {
    //     setTimeout(() => {
    //         setAddModalClass('AddModal-container')
    //     }, 1);
    //     setAddModal(
    //         <AddModal
    //             firstName={firstName}
    //             lastName={lastName}
    //             department={department}
    //             shift={shift}
    //             picture={picture}
	// 			id={id}
    //         />
		
    //     )
	// 	// console.log('hi from add modal call')
    // }

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
		if (!rollCallMode) {
			setRollCallClass('rollCallActive')
		} else {
			setRollCallClass('hidden')
		}
	}

	function cancelClick () {
		setRollCallClass('hidden')
		setRollCallMode(!rollCallMode)
	}

	const handleShiftButtonClick = () => {
		console.log('shift button working')
		setShiftFilter(!shiftFilter)
	}
	
	const handleDepartmentButtonClick = () => {
		console.log('department button working')
		setDepartmentFilter(!departmentFilter)
	}
	

	return (
		<motion.div className='employeesContainer'>
			
			<div className='employeesHeader mb-2 flex'>
				<div className='flex w-10/12 justify-evenly'>
					<span className='filterTab' onClick={handleShiftButtonClick}>shifts</span>
				</div>
				<div className='flex w-10/12 justify-evenly'>
					<span className='filterTab' onClick={handleDepartmentButtonClick}>departments</span>
				</div>
				<div className='flex w-10/12 justify-evenly'>
					<button onClick={rollCallClick} className='filterTab'>roll call</button>
				</div>

			
			
			</div>
			<div className={rollCallClass}>*roll call active*</div>
			<div className={rollCallClass} onClick={cancelClick}>cancel</div>
			<div className={!shiftFilter ? 'hidden' : 'filterChecks mt-2 mb-2'}>
					<label>
						<span className='px-2'>green</span>
						<input type='checkbox' checked={greenChecked} onChange={handleGreenCheck}></input>
					</label>
					<label>
					<span className='px-2'>blue</span>
						<input type='checkbox' checked={blueChecked} onChange={handleBlueCheck}></input>
					</label>
					<label>
					<span className='px-2'>yellow</span>
						<input type='checkbox' checked={yellowChecked} onChange={handleYellowCheck}></input>
					</label>
				</div>
				<div className={!departmentFilter ? 'hidden' : 'filterChecks mt-1 mb-2'}>
					<label>
					<span className='px-0.5'>hr</span>
						<input type='checkbox' checked={hrChecked} onChange={handleHrCheck}></input>
					</label>
					<label>
					<span className='px-0.5'>egg house</span>
						<input type='checkbox' checked={eggHouseChecked} onChange={handleEggHouseCheck}></input>
					</label>
					<label>
					<span className='px-0.5'>cannery</span>
						<input type='checkbox' checked={canneryChecked} onChange={handleCanneryCheck}></input>
					</label>
					<label>
					<span className='px-0.5'>fillet</span>
						<input type='checkbox' checked={filletChecked} onChange={handleFilletCheck}></input>
					</label>
					<label>
					<span className='px-0.5'>h&g</span>
						<input type='checkbox' checked={hgChecked} onChange={handleHgCheck}></input>
					</label>
				</div>
			
			<div className='displayEmployeesContainer'>{DisplayEmployees()}</div>
			
		</motion.div>
	)
}

export default ViewEmployees