import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {AuthProvider, useAuth} from "./context/useAuth.jsx";
import Main_page from "./pages/index.jsx";
import Registration from "./pages/registration.jsx";
import ProfilePage from "./pages/profile.jsx";
import CatalogPage from "./pages/catalog.jsx";
import DeniedPage from "./pages/denied.jsx";
import NotFoundPage from "./pages/not-found.jsx";
import ProtectedRoute from "./components/ProtectRoute.jsx";

function App() {

    return (
        <AuthProvider>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Registration/>}/>
                    <Route path='/login' element={<Main_page/>}/>
                    <Route path='/catalog' element={<CatalogPage/>}/>

                    <Route element={<ProtectedRoute/>}>
                        <Route path='/profile' element={<ProfilePage/>}/>
                        <Route path='/read' element={<ProfilePage/>}/>
                    </Route>

                    <Route element={<ProtectedRoute type='admin'/>}>
                        <Route path='/admin' element={<ProfilePage/>}/>
                    </Route>

                    <Route path='/denied' element={<DeniedPage/>}/>
                    <Route path='/*' element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>

        </AuthProvider>
    )
}

export default App
