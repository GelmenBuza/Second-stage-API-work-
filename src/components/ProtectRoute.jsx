import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/useAuth.jsx";


const ProtectedRoute = ({type = 'user'}) => {
    const {user} = useAuth();
    if (type === 'admin') {
        if (user.role !== 'admin') {
            return <Navigate to="/denied" replace/>
        }
    }

    if (user.role !== 'user' && type !== 'admin') {
        return <Navigate to="/denied" replace/>
    }
    return <Outlet/>;
}

export default ProtectedRoute;