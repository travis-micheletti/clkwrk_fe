import { motion } from 'framer-motion'
import map from '../../images/maptest.svg'

const AreaMap = () => {
	return (
		<motion.div className='subContainer'>
			<img src={map} className='mapContainer' alt='facility map'></img>
		</motion.div>
	)
}

export default AreaMap