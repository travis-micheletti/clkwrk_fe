// importing componenets
import AnimatedRoutes from './components/Pages/AnimatedRoutes';
import NavBar from './components/Navigation/NavBar';

// Import dependencies
import { useState } from 'react'

// setup context
import { AppContext } from './AppContext'

function App() {
  const[shiftSelected, setShiftSelected] = useState([])
  const[profileSelected, setProfileSelected] = useState()
  const[currentUser, setCurrentUser] = useState()
  const[departmentSelected, setDepartmentSelected] = useState([])
  const[employeeLog, setEmployeeLog] = useState([])
  const[noteType, setNoteType] = useState('attendance')
  const[attendanceLog, setAttendanceLog] = useState([])
  const[loggedIn, setLoggedIn] = useState(false)
  const[addModal, setAddModal] = useState()
  const [addModalClass, setAddModalClass] = useState()
  const [axiosResults, setAxiosResults] = useState([])
  const [noteContents, setNoteContents] = useState()
  const [rollCallMode, setRollCallMode] = useState(false)


  return (
    <div className="App flex h-screen w-screen">
    	<AppContext.Provider value={
        {
          shiftSelected, setShiftSelected,
          profileSelected, setProfileSelected,
          currentUser, setCurrentUser,
          departmentSelected, setDepartmentSelected,
          employeeLog, setEmployeeLog,
          noteType, setNoteType,
          attendanceLog, setAttendanceLog,
          loggedIn, setLoggedIn,
          addModal, setAddModal,
          addModalClass, setAddModalClass,
          axiosResults, setAxiosResults,
          noteContents, setNoteContents,
          rollCallMode, setRollCallMode
        }
        
      }> 
      <AnimatedRoutes />
      <NavBar />
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
