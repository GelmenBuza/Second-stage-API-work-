import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <p>Запрашиваемый контент не найден.</p>
            <Link to="/profile" className="btn btn-primary">Вернуться на главную</Link>
        </div>
    )
}