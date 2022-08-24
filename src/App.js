// importing componenets
import AnimatedRoutes from './components/AnimatedRoutes';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className="App flex h-screen w-screen">
    	<div className='text-3xl m-auto'>Hi from clkwrk main app</div>
      <AnimatedRoutes />
      <NavBar />
      
    </div>
  );
}

export default App;
