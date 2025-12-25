export default function ProfilePage () {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Профиль пользователя</h1>
                </div>
            </div>

            <!-- Информация о пользователе -->
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Информация о пользователе</h5>
                            <p className="card-text"><strong>Имя:</strong> Алексей </p>
                            <p className="card-text"><strong>Email:</strong> ivan@example.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Список книг пользователя -->
            <div className="row mt-4">
                <div className="col-md-12">
                    <h3>Мои книги</h3>
                    <div id="user-books">

                    {/*  Книги сюда!!!  */}

                    </div>
                </div>
            </div>

            <!-- Форма для добавления книг -->
            <div className="row mt-4">
                <div className="col-md-12">
                    <h3>Добавить книги</h3>
                    <div id="add-books-form">
                        <!-- Поля для добавления книг будут отображаться здесь -->
                    </div>
                    <button className="btn btn-secondary mt-2" onClick="addBookForm()">Добавить еще одну книгу</button>
                    <button className="btn btn-primary mt-2" onClick="uploadBooks()">Загрузить все книги</button>
                    <div id="error-messages" className="text-danger mt-2"></div>
                </div>
            </div>
        </div>
    )
}