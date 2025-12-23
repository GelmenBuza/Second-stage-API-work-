export default function FormReg() {
    return (
        <form id="Form">
            <!-- Имя -->
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input type="text" className="form-control" id="name" name="name"/>
                <div id="nameError" className="text-danger"></div>
            </div>

            <!-- Email -->
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email"/>
                <div id="emailError" className="text-danger"></div>
            </div>

            <!-- Возраст -->
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Возраст</label>
                <input type="number" className="form-control" id="age" name="age" min="0"/>
                <div id="ageError" className="text-danger"></div>
            </div>

            <!-- Пол -->
            <div className="mb-3">
                <label className="form-label">Пол</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="male"/>
                        <label className="form-check-label" htmlFor="male">Мужской</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="female"/>
                        <label className="form-check-label" htmlFor="female">Женский</label>
                    </div>
                </div>
                <div id="genderError" className="text-danger"></div>
            </div>

            <!-- Пароль -->
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input type="password" className="form-control" id="password" name="password"/>
                <div id="passwordError" className="text-danger"></div>
            </div>

            <!-- Повтор пароля -->
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Повторите пароль</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"/>
                <div id="confirmPasswordError" className="text-danger"></div>
            </div>

            <!-- Согласие на обработку данных -->
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="agree" name="agree"/>
                <label className="form-check-label" htmlFor="agree">Я согласен на обработку персональных данных</label>
                <div id="agreeError" className="text-danger"></div>
            </div>

            <!-- Кнопка регистрации -->
            <button type="submit" className="btn btn-primary w-100">Зарегистрироваться</button>
        </form>
    )
}