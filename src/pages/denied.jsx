import {Link} from 'react-router-dom';

export default function DeniedPage() {
    return (
        <div className="denied-container">
            <h1>403</h1>
            <p>Доступ запрещен.</p>
            <Link to='/profile' className="btn btn-primary">Вернуться на главную</Link>
        </div>
    )
}