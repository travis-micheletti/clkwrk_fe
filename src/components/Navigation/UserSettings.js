// User settings - > as for right now only allows for adding of an employee but will include more functionality after auth is added

import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import AddEmployee from '../Employee/AddEmployee'

const UserSettings = () => {

	const {
		setHideNavBar, employeeModalHidden,
		setEmployeeModalHidden
	}
		= useContext(AppContext)
	
	useEffect(() => {
		setHideNavBar(false)
		setEmployeeModalHidden(true)
	}, [])


	const handleAddEmployee = () => {
		setEmployeeModalHidden(!employeeModalHidden)
		console.log(employeeModalHidden)
	}

	return (
		<motion.div 
			className='settingsContainer'
			initial={{ opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
			transition={{duration: 1}}
			>
				<div className='settings'>
					<h1 className='settingsHeader'>user settings</h1>
					<div className='h-full m-10'>
							<div className='setting'><button className='cursor-pointer' onClick={handleAddEmployee}>add employee</button></div>
							<div className='setting'>setting 2</div>
							<div className='setting'>setting 3</div>
					</div>
				</div>

				<div className={employeeModalHidden ? 'hidden' : 'employeeModalArea'}>
					<AddEmployee />
				</div>					
		</motion.div>
	)
}

export default UserSettings