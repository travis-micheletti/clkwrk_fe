import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { motion } from 'framer-motion'
import axios from "axios"


const AddNote = () => {
	
	
	const  {
		profileSelected,
		noteType, setNoteType,
		noteContents, setNoteContents,
		currentUser
	}
		= useContext(AppContext)
		const fullName = `${profileSelected.lastName}, ${profileSelected.firstName}`
		console.log(fullName)
	function addToNotes () {
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
				console.log(response.data._id)
			})
				// .then(axios.get('https://clkwrk-be.herokuapp.com/notes')
				// .then(response => {
				// 	console.log(response.data)
				// 	const newNote = response.data.splice(0,1)
				// 	profileSelected.employeeLog.unshift(newNote)
				// 	console.log(newNote[0])
				// }))
				// .catch(console.error)
			
			
		
		console.log(`${profileSelected.employeeLog}`)
		console.log(`${currentUser} is adding a ${noteType} note to ${profileSelected.firstName}'s employee log containing ${noteContents}`)
		// console.log(profileSelected)
		// console.log(noteType)
		// console.log(noteContents)
		// console.log(currentUser)
	}
	// console.log(noteType)
	// console.log(profileSelected.employeeLog)
	// console.log(profileSelected._id)
	console.log(profileSelected.employeeLog)
	return (
		<div>
			<span>Add Note</span>
			<div className='showModal'>
				<form className='addNoteForm border h-80 w-80 display flex flex-col'>
					<div className='flex'>
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
			</div>
		</div>
	)
}
	export default AddNote