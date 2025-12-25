import {useState} from "react";
import {useUserApi} from "../services/useUserApi.js";

export default function FormAuth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({email: "", password: ""})

    const validate_data = () => {
        const emailReg = /^[\w.+%-]+@[a-zA-Z\d.\-]+\.[a-zA-Z]{2,}$/;
        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/
        const newErrors = {email: '', password: ''}
        if (!emailReg.test(email)) {
            newErrors.email = `email validate error`;
        }
        if (!passwordReg.test(password)) {
            newErrors.password = `password validate error`;

        }
        setErrors(newErrors);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate_data()
        console.log(email, password)
        // useUserApi.login(email, password)
    }

    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value.trim())}
                       className={errors.email ? "form-control form-control--error" : "form-control"} id="email"
                       name="email"/>
                {errors.email && (<div id="emailError" className="text-danger">{errors.email}</div>)}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>a
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       className={errors.password ? "form-control form-control--error" : "form-control"} id="password"
                       name="password"/>
                {errors.password && (<div id="passwordError" className="text-danger">{errors.password}</div>)}
            </div>
            <button type="submit" className="btn btn-primary w-100">Войти</button>
        </form>
    )
}