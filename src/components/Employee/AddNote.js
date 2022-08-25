import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { motion } from 'framer-motion'


const AddNote = () => {

	
	const  {
		profileSelected,
		noteType, setNoteType
	}
		= useContext(AppContext)

	console.log(noteType)
	return (
		<div>
			<span>Add Note</span>
			<div className='showModal'>
				<form className='addNoteForm border'>
					<div>
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

				</form>
			</div>
		</div>
	)
}
	export default AddNote