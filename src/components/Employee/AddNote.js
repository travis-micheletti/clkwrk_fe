import { useContext, useState } from "react"
import { AppContext } from "../../AppContext"
import { motion } from 'framer-motion'
import axios from "axios"


const AddNote = () => {
	
	const [newId, setNewId] = useState()
	const  {
		profileSelected,
		noteType, setNoteType,
		noteContents, setNoteContents,
		currentUser
	}
		= useContext(AppContext)
		const fullName = `${profileSelected.lastName}, ${profileSelected.firstName}`
		console.log(fullName)
		
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
				setNewId(response.data._id)
				addToLog()
			})
			.catch(console.error)
			
			
		
		console.log(`${profileSelected.employeeLog}`)
		console.log(`${currentUser} is adding a ${noteType} note to ${profileSelected.firstName}'s employee log containing ${noteContents}`)
	
	}
	const addToLog = () => {
		axios.get(`https://clkwrk-be.herokuapp.com/notes/${newId}`)
			.then(response => {
				const newLog = `-------------------------------------- \n DATE/TIME: ${response.data.date} \n USER:${response.data.author} \n TYPE:${response.data.type} \n COMMENT:${response.data.comment} \n--------------------------------------`
				console.log(newLog)
				profileSelected.employeeLog.unshift(newLog)
			})
			.catch(console.error)
	}
	
	console.log(profileSelected.employeeLog)
	return (
		<motion.div className='modalContainer border'>
			<span>New Note</span>
				<form className='subContainer h-80 w-80 flex flex-col'>
					<div className=''>
						<label>
							Note Type:
							<select value={noteType} 
							onChange={(e) => 
								setNoteType(e.currentTarget.value)
							}>
								<option value='attendance'>Attendance</option>
								<option value='behavior'>Behavior</option>
								<option value='commendation'>Commendation</option>
								<option value='other'>Other</option>
							</select>
						</label>
					</div>
						<div >
						<label className='flex content-start flex-wrap truncate'>
							Note:
							<textarea 
							placeholder='Type comments here' 
							type='text' 
							className='border w-60 h-60 break-normal'
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
					<div className='cursor-pointer border bg-slate-500' onClick={() => {
						addToNotes()
					}}>
						Submit
					</div>
				</form>
		</motion.div>
	)
}
	export default AddNote