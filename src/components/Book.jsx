export default function Book(type) {
    return (

        <div className="card book-card">
            {
                type === 'catalog' &&
                <div className="card-body">
                    <h5 className="card-title">Заголовок книги</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
                    <p className="card-text">Описание книги</p>
                    <a href="book.html" className="btn btn-primary">Читать</a>
                </div>
            }

            {
                type === 'profile' &&
                <div className="card-body">
                    <h5 className="card-title">Название книги</h5>
                    <input className="form-control" type="text" id="book-title-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                    <input className="form-control" type="text" id="book-author-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                    <input className="form-control" type="text" id="book-description-${formId}"/>
                    <button className="btn btn-warning btn-sm" onClick="editBook()">Редактировать</button>
                    <button className="btn btn-danger btn-sm" onClick="deleteBook()">Удалить</button>
                </div>
            }

            {
                type === 'admin' &&
                <div className="card-body">
                    <h5 className="card-title">Название книги</h5>
                    <input className="form-control" type="text" id="book-title-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                    <input className="form-control" type="text" id="book-author-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                    <input className="form-control" type="text" id="book-description-${formId}"/>
                    <h5 className="card-subtitle mb-2 text-muted">Статус</h5>
                    <p className="form-control" id="book-status-${formId}">Доступно</p>
                    <button className="btn btn-warning btn-sm" onClick="editBook()">Редактировать</button>
                    <button className="btn btn-danger btn-sm" onClick="deleteBook()">Удалить</button>
                    <button className="btn btn-secondary btn-sm" onClick="toggleStatus()">Изменить статус</button>
                </div>
            }
        </div>
    )
}