import { motion } from 'framer-motion'
import { useEffect, useState, useContext } from 'react'
import map from '../../images/maptest.svg'
import { AppContext } from '../../AppContext'
import accentLines from '../../images/accentLines.svg'




const AreaMap = () => {
	const [zoom, setZoom] = useState(false)

	const {
		setHideNavBar
	}
		= useContext(AppContext)

	useEffect(() => {
		setHideNavBar(false)
	},[])

	const handleZoom = () => {
		setZoom(!zoom)
	}

	return (
		<motion.div 
			className={zoom ? 'mapContainer overflow-x-scroll' : 'mapContainer'}
			initial={{ opacity: 0}}
            animate={{opacity: 1}}
            // transition={{type: "spring", damping: 10, stiffness: 100}}
            exit={{opacity: 0}}
		>
			<div className='fixed z-50 top-0 left-10'><img className='mapAccent' alt='accent line' src={accentLines}/></div>
			<h1 className='font-raleway text-honeydew font-extrabold text-6xl flex text-center my-20 justify-center items-center'>facility map</h1>
			<motion.div
				className='mapFrame'
				animate={{ scale: zoom ? 2.5 : 1}}
				transition={{type: "spring", damping: 10, stiffness: 100}}
				onClick={handleZoom}
			>
				
					<motion.img
						src={map}
						className='map overflow-scroll'
						alt='facility map' 
						onClick={handleZoom}
						transition={{type: "spring", damping: 25, stiffness: 120}}
					/>
				
				
			</motion.div>
			<div className=''><img className='mapAccent' alt='accent line' src={accentLines}/></div>
		</motion.div>
	)
}

export default AreaMap