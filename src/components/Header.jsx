import {Link} from 'react-router-dom'

export default function Header() {

    return (
        <header className="header">
            <nav className="header-nav">
                <Link to='/admin'>Тест</Link>
                <Link to='/catalog'>Каталог</Link>
                <Link to='/profile'>Профиль</Link>
            </nav>
        </header>
    )
}