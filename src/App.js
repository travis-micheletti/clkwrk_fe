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
  const[noteType, setNoteType] = useState('default')
  const[attendanceLog, setAttendanceLog] = useState([])
  const[loggedIn, setLoggedIn] = useState(false)
  const[addModal, setAddModal] = useState()
  const [addModalClass, setAddModalClass] = useState()
  const [axiosResults, setAxiosResults] = useState([])
  const [noteContents, setNoteContents] = useState()
  const [rollCallMode, setRollCallMode] = useState(false)
  const [array, setArray] = useState([])
  const [hideNavBar, setHideNavBar] = useState(true)
  const [showNav, setShowNav] = useState(false)
  const [noteModalHidden, setNoteModalHidden] = useState(true)
  const [logModalHidden, setLogModalHidden] = useState(true)
  const [employeeModalHidden, setEmployeeModalHidden] = useState(true)


  return (
    <div className="App flex h-screen w-screen font-sora-main">
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
          rollCallMode, setRollCallMode,
          array, setArray,
          hideNavBar, setHideNavBar,
          showNav, setShowNav,
          noteModalHidden, setNoteModalHidden,
          logModalHidden, setLogModalHidden,
          employeeModalHidden, setEmployeeModalHidden
        }
        
      }> 
      <AnimatedRoutes />
      <NavBar />
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
