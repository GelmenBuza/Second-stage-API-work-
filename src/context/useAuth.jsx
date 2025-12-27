import {createContext, useContext, useState} from "react";
import {useUserApi} from "../services/useUserApi.js";

export const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth not context");
    return context;
}

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState();

    const login = async (email, password) => {
        try {
            setError('');
            const res = await useUserApi.login(email, password);
            const {token, user} = res.data;
            localStorage.setItem('token', token);
            setUser(user);
            return res;
        } catch (e) {
            setError(e.message);
            return {success: false, error: e.message};
        }
    }
    const register = async (email, password, age, name  ) => {
        try {
            setError('');
            const res = await useUserApi.registration(name, email, age, password);
            const {user} = res.data;
            setUser(user);
            return res;
        } catch (e) {
            setError(e.message);
            return {success: false, error: e.message};
        }
    }

    const logout = async () => {
        try {
            setError('');
            const res = await useUserApi.logout();
            localStorage.removeItem('token');
            localStorage.removeItem('readSett');

            setUser(null);
        } catch (e) {
            setError(e.message);
            return {success: false, error: e.message};
        }
    }

    const value = {
        login, register, logout, user, error
    }

    return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>);
}