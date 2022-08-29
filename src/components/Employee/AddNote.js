import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { motion } from 'framer-motion'
import axios from "axios"
import Moment from 'react-moment'


const AddNote = () => {
	
	const [newId, setNewId] = useState()
	const  {
		profileSelected,
		noteType, setNoteType,
		noteContents, setNoteContents,
		currentUser,
		noteModalHidden, setNoteModalHidden,
	}
		= useContext(AppContext)
		const fullName = `${profileSelected.lastName}, ${profileSelected.firstName}`
		console.log(fullName)
		
	useEffect(() => {
		setNoteType('')
		setNoteContents('')
	},[])

		
	const addToNotes =  () => {
		// if (noteContents.length < 1) {
		// 	alert('Please fill out the comment box!')
		// } else {
			axios.post('https://clkwrk-be.herokuapp.com/notes/', {
			
				employee: fullName,
				type: noteType,
				comment: noteContents,
				author: currentUser
			}) 
			.then((response) => {
				console.log(response.data)
				setNewId(response.data._id)
				convertToLog()
				console.log('this should be working')
			})
			.catch(console.error)
			
		
		
		console.log(`${profileSelected.employeeLog}`)
		console.log(`${currentUser} is adding a ${noteType} note to ${profileSelected.firstName}'s employee log containing ${noteContents}`)
		console.log(noteContents)
	}
	const addToLog = (newLog) => {
		console.log(newLog)
		axios.put(`https://clkwrk-be.herokuapp.com/employees/${profileSelected._id}`, {
			 $addToSet: { employeeLog: newLog }})
			.then(
				console.log(`item added!`)
			)
		
		.catch(console.error)
	}
	const convertToLog = () => {
		axios.get(`https://clkwrk-be.herokuapp.com/notes/${newId}`)
			.then(response => {
				console.log('hello from add note')
				const newLog = `\n Date/Time: ${<Moment format='MM/DD/YYYY HH:mm'>{response.data.date}</Moment>} \n Author:${response.data.author} \n Type:${response.data.type} \n Comment:${response.data.comment}`
				console.log(newLog)
				addToLog(newLog)
			})
			.catch(console.error)
	}
	
	console.log(profileSelected.employeeLog)
	

	const handleModalClick = () => {
		setNoteModalHidden(!noteModalHidden)
	}
	console.log(noteType)
	console.log(profileSelected.employeeLog)
	return (
		<motion.div 
			className={noteModalHidden ? 'hidden' : 'modalContainer'}

		>
				<form className='modalContents sm:w-1/2'>
						
						<label>
							<select 
								className='modalItem'
								value={noteType} 
								onChange= {(e) => 
									setNoteType(e.currentTarget.value)
							}>
								<option value='default' hidden>Note Type</option>
								<option value='attendance'>Attendance</option>
								<option value='behavior'>Behavior</option>
								<option value='commendation'>Commendation</option>
								<option value='other'>Other</option>
							</select>
						</label>
						<div className='w-screen flex justify-center h-1/2 mt-5'>
						<label className='flex content-start flex-wrap truncate'>
							
							<textarea 
							placeholder='Type comments here' 
							type='text' 
							className='border-4 border-pal-orange rounded-xl text-pal-cream bg-welcome-bg break-normal h-full'
							value={noteContents}
							onChange={(e) => {
								setNoteContents(e.currentTarget.value)
								console.log(noteContents)
							}
							
							}
							>
							</textarea>
						</label>
					</div>
					<div className='flex justify-between w-1/2'>
							<div className='cursor-pointer border bg-slate-500' onClick={() => {
								handleModalClick()
							}}>
								Cancel
							</div>
							<div className='cursor-pointer border bg-slate-500' onClick={() => {
								addToNotes()
							}}>
								Submit
							</div>
					</div>
					
				</form>
		</motion.div>
	)
}
	export default AddNote