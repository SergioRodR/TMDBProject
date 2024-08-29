import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
// import AcercaDe from '../pages/AcercaDe';
import DetallePelicula from '../pages/DetallePelicula';

const RoutesIndex = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movieDetail/:id' element={<DetallePelicula />} />
        </Routes>
    )
}

export default RoutesIndex;