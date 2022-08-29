// Employee Log - > displays all notes reverse chronologically and allows for filtering of different types of notes
// here we will do an axios.get for the employee log that pulls from the selected employee's array of logs
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { motion } from 'framer-motion'
import Moment from 'react-moment'



const EmployeeLog = () => {

	const  {
		profileSelected,
		currentUser,
		logModalHidden, setLogModalHidden,
	}
		= useContext(AppContext)

useEffect(() => {
	displayLog()
},[])

function displayLog() {
	return profileSelected.employeeLog.map((item, index) => {
		return (
			<div key={index}>
				<span>{item}</span>
			</div>
		)
	})
}

function handleModalClick () {
	setLogModalHidden(!logModalHidden)
}

function exportContent () {
	console.log('this will export content to spreadsheets')
}

	return (
		<motion.div className='modalArea'>
			<div className='modalContainer'>
				<div className='modalContents h-5/6'>
					<div className='modalItem mt-5'>Employee Log</div>
					<div className='modalItem w-to-fit h-to-fit m-10 flex justify-center items-center rounded-xl'>
						This is where the logs will go eventually
						{displayLog()}
					</div>
					<div className='flex justify-between w-1/2 py-5'>
							<div className='cursor-pointer border bg-slate-500' onClick={() => {
								handleModalClick()
							}}>
								Cancel
							</div>
							<div className='cursor-pointer border bg-slate-500' onClick={() => {
								exportContent()
							}}>
								Submit
							</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default EmployeeLog