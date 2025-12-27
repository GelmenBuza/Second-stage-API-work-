import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUserApi} from "../services/useUserApi.js";
import {useAuth} from "../context/useAuth.jsx";

function FormReg() {
    const {register, error} = useAuth()
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        agree: '',
        confirmPassword: ''
    })

    const validate_data = () => {
        const emailReg = /^[\w.+%-]+@[a-zA-Z\d.\-]+\.[a-zA-Z]{2,}$/;
        const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;
        const newErrors = {name: '', email: '', password: '', age: '', gender: '', agree: '', confirmPassword: ''}
        let flag = true;
        try {
            if (name[0].toUpperCase() !== name[0]) {
                newErrors.name = 'The first character of the name must be a capital letter.'
                flag = false;
            }
        } catch (error) {
            newErrors.name = 'Write your name.'
            flag = false;
        }

        if (!emailReg.test(email)) {
            newErrors.email = `Invalid email address.`;
            flag = false;
        }
        if (!passwordReg.test(password)) {
            newErrors.password = `Invalid password.`;
            flag = false;
        }
        if (age < 2) {
            newErrors.age = `Your age is too young`;
            flag = false;
        } else if (age > 150) {
            newErrors.age = `Your age is too old`;
            flag = false;
        }
        if (!gender) {
            newErrors.gender = `Select your gender.`;
            flag = false;
        }
        if (!agree) {
            newErrors.agree = `Agree to data processing.`;
            flag = false;
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
            flag = false;
        }
        setErrors(newErrors);
        console.log(flag);
        return flag;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate_data()) {
            const resp = await register(email, password, age, name)
            if (resp.data.code < 300 && resp.data.code > 199) {
                navigate('/login');
            } else {
                throw new Error(resp.message);
            }
        }
    }

    return (
        <form id="Form" onSubmit={handleSubmit}>
            {/*--Имя--*/}
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value.trim())}
                       className={errors.name ? "form-control form-control--error" : "form-control"} id="name"
                       name="name"/>
                {errors.name && (<div id="nameError" className="text-danger">{errors.name}</div>)}
            </div>

            {/*--Email--*/}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value.trim())}
                       className={errors.email ? "form-control form-control--error" : "form-control"} id="email"
                       name="email"/>
                {errors.email && (<div id="emailError" className="text-danger">{errors.email}</div>)}

            </div>

            {/*--Возраст--*/}
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Возраст</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value.trim())}
                       className={errors.age ? "form-control form-control--error" : "form-control"} id="age" name="age"
                       min="0"/>
                {errors.age && (<div id="ageError" className="text-danger">{errors.age}</div>)}

            </div>

            {/*--Пол--*/}
            <div className="mb-3">
                <label className="form-label">Пол</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={() => setGender('male')} type="radio"
                               name="gender" id="male" value="male"/>
                        <label className="form-check-label" htmlFor="male">Мужской</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" onChange={() => setGender('female')} type="radio"
                               name="gender" id="female" value="female"/>
                        <label className="form-check-label" htmlFor="female">Женский</label>
                    </div>
                </div>
                {errors.gender && (<div id="genderError" className="text-danger">{errors.gender}</div>)}
            </div>

            {/*--Пароль--*/}
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value.trim())}
                       className={errors.password ? "form-control form-control--error" : "form-control"} id="password"
                       name="password"/>
                {errors.password && (<div id="passwordError" className="text-danger">{errors.password}</div>)}

            </div>

            {/*--Повтор пароля --*/}
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Повторите пароль</label>
                <input type="password" value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value.trim())}
                       className={errors.confirmPassword ? "form-control form-control--error" : "form-control"}
                       id="confirmPassword" name="confirmPassword"/>
                {errors.confirmPassword && (
                    <div id="confirmPasswordError" className="text-danger">{errors.confirmPassword}</div>)}
            </div>

            {/*--Согласие на обработку данных --*/}
            <div className="mb-3 form-check">
                <input type="checkbox" onChange={(e) => setAgree(!agree)} className="form-check-input"
                       id="agree" name="agree"/>
                <label className="form-check-label" htmlFor="agree">Я согласен на обработку персональных данных</label>
                {errors.agree && (<div id="agreeError" className="text-danger">{errors.agree}</div>)}
            </div>

            {/*--Кнопка регистрации --*/}
            <button type="submit" className="btn btn-primary w-100">Зарегистрироваться</button>
        </form>
    )
}

export default FormReg