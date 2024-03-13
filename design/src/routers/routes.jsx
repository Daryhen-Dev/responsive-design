import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Proyecto1Page } from '../pages/Proyecto1Page'

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Proyecto1Page/>} />
            </Routes>
        </BrowserRouter>
    )
}