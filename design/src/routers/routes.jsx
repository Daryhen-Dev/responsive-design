import { Routes, Route } from 'react-router-dom'
import { Proyecto1Page } from '../pages/Proyecto1Page'
import { Proyecto2Page } from '../pages/Proyecto2Page'

export const MyRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Proyecto1Page/>} />
                <Route path='/proyect2' element={<Proyecto2Page/>} />
            </Routes>
    )
}