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
            exit={{opacity: 0}}
			transition={{duration: 1}}
		>
			<div className='fixed z-50 top-0 left-10'><img className='mapAccent' alt='accent line' src={accentLines}/></div>
			<h1 className='font-raleway text-honeydew font-extrabold text-6xl flex text-center my-20 justify-center items-center'>facility map</h1>
			<motion.div
				className='mapFrame'
				animate={{ scale: zoom ? 2.5 : 1}}
				onClick={handleZoom}
			>
				
					<motion.img
						src={map}
						className='map overflow-scroll'
						alt='facility map' 
						onClick={handleZoom}
					/>
				
				
			</motion.div>
			<div className=''><img className='mapAccent' alt='accent line' src={accentLines}/></div>
		</motion.div>
	)
}

export default AreaMap