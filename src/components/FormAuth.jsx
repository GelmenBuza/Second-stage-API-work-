export default function FormAuth () {
    return (
        <form id="loginForm">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email"/>
                <div id="emailError" className="text-danger"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input type="password" className="form-control" id="password" name="password"/>
                <div id="passwordError" className="text-danger"></div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Войти</button>
        </form>
    )
}