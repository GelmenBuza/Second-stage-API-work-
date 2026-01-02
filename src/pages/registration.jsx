import FormReg from "../components/FormReg.jsx";
import {Link} from "react-router-dom";

export default function Registration() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Регистрация</h3>
                        </div>
                        <div className="card-body">
                            {/*-- Форма регистрации --*/}
                            <FormReg></FormReg>
                            <Link to='/login'>Уже есть аккаунт?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}