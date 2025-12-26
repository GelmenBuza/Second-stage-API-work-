import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {AuthProvider} from "./context/useAuth.jsx";
import Main_page from "./pages/index.jsx";
import Registration from "./pages/registration.jsx";
import ProfilePage from "./pages/profile.jsx";

function App() {


    return (
        <AuthProvider>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Registration/>}/>
                    <Route path='/login' element={<Main_page/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    {/*<Route path='/catalog' element={}/>*/}
                    {/*<Route path='/read' element={}/>*/}
                    {/*<Route path='/admin' element={}/>*/}
                    {/*<Route path='/not-found' element={}/>*/}
                    {/*<Route path='/denied' element={}/>*/}
                </Routes>
            </BrowserRouter>

        </AuthProvider>
    )
}

export default App
